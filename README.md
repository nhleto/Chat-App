<h1>All Chat</h1>

          <p>
            All Chat is written with Ruby on Rails and built to utilize Action Cable, Rails' WebSocket wrapper. 
            In addition to handrolled CSS, I used Bulma CSS for styling, and Javascript
            to both bring the page to life, and program the WebSocket actions.
          </p>
          <p>
            All Chat uses WebSockets to keep an open connection between clients and the server, allowing users
            to stream data directly to each other. I used All Chat highlight the versatility and 
            practicality of WebSockets by showing off their use in an instant messaging app.
          </p>


![Screenshot (9)](https://user-images.githubusercontent.com/68115763/103695312-5409fb00-4f6a-11eb-89dd-017bdfec881a.png)


<h4>Roundtable features:</h4>
<ul>
  <li>User’s can make posts and can comment on those posts.</li>
  <li>Comments and be liked and replied to by other users (nested comments).</li>
  <li>Users can see who liked a post or comment and add them as a friend or visit their profile from a dropdown menu.</li>
  <li>Users can send friend requests to other users.These can be accepted or declined.</li>
  <li>User’s have profiles and profile-pictures (Rails Active Storage - avatars default to a Gravatar if no picture is attached) and users can upload a photo of their choice on  sign-up or from their profile page.</li>
  <li>Users can create Groups and post directly to that group in a separate feed.</li>
  <li>Groups have one owner, many admins, and many users. The group owner can promote users to admins. Group owners and admins can edit group data (name, description, group photo).</li>
  <li>Posts in a group feed have the same functionality as posts in the main feed (comments, nested comments, likes).</li>
  <li>Implemented Google and Github API to allow users to create a profile on Roundtable from their Google or Github account.</li>
</ul>


<h4>Tech used:</h4>
<ul>
  <li>Ruby v2.7.2</li>
  <li>Ruby on Rails v6.0</li>
  <li>Bulma v0.9.0</li>
  <li>PostgreSQL v12.4</li>
  <li>Javascript(ES6)</li>
  <li>Sass</li>
  <li>Heroku Deployment</li>
  <li>Redis</li>
</ul>
