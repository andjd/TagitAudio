(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var EpisodeStub = JSON.parse('{"title":"TMO Daily Observations 2015-11-17: Pandora Buys Rdio, a Week with iPad Pro","episode_url":"http://mp3.macobserver.com/podcast/dailyobservations/tmodo_20151117.mp3","description":"Rdio filed bankruptcy and now Pandora is buying up their assets. John Martellaro and Bryan Chaffin join Jeff Gamet to share their thoughts on Pandora\u0026#39;s move and the streaming music market in general. Jeff and John also share their thoughts after a week with their new iPad Pros.","publication_date":"2015-11-17T18:28:00.000Z","mime_type":"audio/mpeg","podcast":{"id":1,"title":"The Mac Observer\'s Daily Observations Podcast","image_url":"http://www.macobserver.com/imgs/category_images/tmo_dailyobservations_1400px.jpg"}}');

  var ep = EpisodeStub;

  TA.EpisodePlayer = React.createClass ({
    render: function () {
      return (
        <article className="player">
          <TA.EpisodeImage episode={ep} />
          <TA.PlayButton episode={ep} />
          <TA.EpisodeInfo episode={ep} />
          <TA.ProgressBar episode={ep} />
        </article>
      );
    },
  });
}(this));
