
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};


  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var EpisodeStub = JSON.parse('{"episode_id":4,"title":"TMO Daily Observations 2015-11-12: A Day with iPad Pro","episode_url":"http://mp3.macobserver.com/podcast/dailyobservations/tmodo_20151112.mp3","description":"It\u0026#39;s been only a day since the iPad Pro was released and already people are forming their opinions on the mega-sized tablet. The Maccast\u0026#39;s Adam Christianson joins Jeff Gamet to discuss what they think of the latest addition to the iPad line, and the different use cases they have planned for theirs.","publication_date":"2015-11-12T18:12:00.000Z","mime_type":"audio/mpeg","podcast":{"id":1,"title":"The Mac Observer\'s Daily Observations Podcast","image_url":"http://www.macobserver.com/imgs/category_images/tmo_dailyobservations_1400px.jpg"}}');

  var ep = EpisodeStub;

  var App = React.createClass({
    render: function () {
      return (<TA.EpisodePlayer episode={ep} />);
    }
  });

  $(document).ready(function() {

    React.render(
      (
        <Router>
          <Route path="/" component={App} />
        </Router>
      ),
      document.getElementById("react")
    );
  });
}(this));
