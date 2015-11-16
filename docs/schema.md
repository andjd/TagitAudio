# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
avatar_url      | string    | 
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## podcasts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null 
description | string    |
rss_url     | string    | not null
image_url   | string    |

## podcast_follows

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (referenes users), indexed
podcast_id  | integer   | not null, foreign key (referenes podcasts), indexed



## episodes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
podcast_id  | integer   | not null, foreign key (referenes podcasts), indexed
title       | string    | not null
url         | string    | not null
duration    | integer   |
description | string    | 

## episode_likes

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (referenes users), indexed
episode_id  | integer   | not null, foreign key (referenes episodes), indexed


## annotations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
episode_id      | string    | not null, foreign key (references episodes), indexed
timestamp       | integer   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
annotation_id   | integer   | not null, foreign key (references annotations), indexed, unique [tag_id]
tag_id          | integer   | not null, foreign key (references tags), indexed


