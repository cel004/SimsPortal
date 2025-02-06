import pytumblr
from dotenv import load_dotenv
import os
from datetime import datetime
import re 

load_dotenv()
CONSUMER_KEY = os.getenv('TUMBLR_CONSUMER_KEY')
CONSUMER_SECRET = os.getenv('TUMBLR_CONSUMER_SECRET')
OAUTH_TOKEN = os.getenv('TUMBLR_OAUTH_TOKEN')
OAUTH_SECRET = os.getenv('TUMBLR_OAUTH_SECRET')

if not all([CONSUMER_KEY, CONSUMER_SECRET, OAUTH_TOKEN, OAUTH_SECRET]):
    raise ValueError("Missing OAuth credentials in .env file.")

client = pytumblr.TumblrRestClient(
    CONSUMER_KEY,
    CONSUMER_SECRET,
    OAUTH_TOKEN,
    OAUTH_SECRET
)

# define the tags to scrape
TAGS = [
    'ts4cc', 'ts3cc', 'ts2cc', 'ts1cc', 'simblr',
    'sims 4 mods', 'sims 3 mods', 'sims 2 mods', 'sims mods',
    'sims 4 mod', 'sims 3 mod', 'sims 2 mod', 'sims mod',
    'the sims cc', 'sims cc'
]

def get_posts_for_tag(tag, limit=20):
    try:
        print(f"Fetching posts for tag: {tag}") 
        response = client.tagged(tag, limit=limit)
        return response
    except Exception as e:
        print(f"Error fetching posts for tag {tag}: {e}")
        return []


def contains_download_in_description(post):
    description = post.get('summary', '') or post.get('caption', '')

    return 'download' in description.lower()

def contains_download_link(post):
    content = ' '.join([
        post.get('summary', ''),
        post.get('caption', ''),
        post.get('body', '')
    ]).lower()

    download_patterns = [
        r'download',  
        r'mediafire\.com',
        r'dropbox\.com',
        r'mega\.nz', 
        r'google\.com\/drive',
    ]
    for pattern in download_patterns:
        if re.search(pattern, content):
            return True
    return False

def extract_post_details(post):
    title = post.get('title', 'No Title')
    description = post.get('summary', '') or post.get('caption', 'No Description')
    keywords = post.get('tags', [])
    author = post.get('blog_name', 'Unknown Author')
    timestamp = post.get('timestamp', None)
    if timestamp:
        date_posted = datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')
    else:
        date_posted = 'Unknown Date'
    post_url = post.get('post_url', 'No URL')

    return {
        'title': title,
        'description': description,
        'keywords': keywords,
        'author': author,
        'date_posted': date_posted,
        'link': post_url
    }

all_posts = []
for tag in TAGS:
    posts = get_posts_for_tag(tag)
    if posts:
        all_posts.extend(posts) 
    else:
        print(f"No posts found for tag: {tag}")

filtered_posts = [post for post in all_posts if contains_download_link(post)]

if filtered_posts:
    for post in filtered_posts:
        post_details = extract_post_details(post)
        print(f"Title: {post_details['title']}")
        print(f"Description: {post_details['description']}")
        print(f"Keywords: {', '.join(post_details['keywords'])}")
        print(f"Author: {post_details['author']}")
        print(f"Date Posted: {post_details['date_posted']}")
        print(f"Link: {post_details['link']}")
        print("-" * 40) 
else:
    print("No posts found that contain a download link.")