import requests
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()
API_KEY = os.getenv('TUMBLR_API_KEY')

# Define the tags to search for
TAGS = ['sims', 'mod']

# Function to get posts for a specific tag
def get_posts_for_tag(tag):
    URL = f'https://api.tumblr.com/v2/tagged/{tag}?api_key={API_KEY}'
    response = requests.get(URL)
    if response.status_code == 200:
        return response.json()['response']
    else:
        print(f"Error fetching posts for tag {tag}: {response.status_code}")
        return []

# Get posts for all tags
all_posts = []
for tag in TAGS:
    posts = get_posts_for_tag(tag)
    all_posts.extend(posts)  # Add the posts from this tag to the list of all posts

# Filter posts that contain the keywords 'sims' or 'mod' in the content
def filter_posts_by_keywords(posts, keywords):
    filtered_posts = []
    for post in posts:
        content = post.get('summary', '') + post.get('title', '')
        if any(keyword.lower() in content.lower() for keyword in keywords):
            filtered_posts.append(post)
    return filtered_posts

# Filter posts by 'sims' or 'mod' keywords in content
filtered_posts = filter_posts_by_keywords(all_posts, TAGS)

# Print the filtered posts
for post in filtered_posts:
    print(post['summary'])
