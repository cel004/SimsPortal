from requests_oauthlib import OAuth1Session

# Replace these with your credentials
CONSUMER_KEY = '63h8ZiUlCLGssI6tEA4f2eXkn6WBlpssbVKnFnkwjr0BfIy4Y8'
CONSUMER_SECRET = 'your_consumer_secret'

# Step 1: Obtain a request token
request_token_url = 'https://www.tumblr.com/oauth/request_token'
oauth = OAuth1Session(CONSUMER_KEY, client_secret=CONSUMER_SECRET)
fetch_response = oauth.fetch_request_token(request_token_url)

# Step 2: Authorize the request token
base_authorization_url = 'https://www.tumblr.com/oauth/authorize'
authorization_url = oauth.authorization_url(base_authorization_url)
print(f"Please go here and authorize: {authorization_url}")
redirect_response = input("Paste the full redirect URL here: ")

# Step 3: Parse the authorization response and get the verifier
oauth_response = oauth.parse_authorization_response(redirect_response)
verifier = oauth_response.get('oauth_verifier')

# Step 4: Exchange the request token for an access token
access_token_url = 'https://www.tumblr.com/oauth/access_token'
oauth = OAuth1Session(
    CONSUMER_KEY,
    client_secret=CONSUMER_SECRET,
    resource_owner_key=fetch_response.get('oauth_token'),
    resource_owner_secret=fetch_response.get('oauth_token_secret'),
    verifier=verifier
)
oauth_tokens = oauth.fetch_access_token(access_token_url)

# Step 5: Save the access token and secret
ACCESS_TOKEN = oauth_tokens.get('oauth_token')
ACCESS_SECRET = oauth_tokens.get('oauth_token_secret')
print(f"Access Token: {ACCESS_TOKEN}")
print(f"Access Secret: {ACCESS_SECRET}")