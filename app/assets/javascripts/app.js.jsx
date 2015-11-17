
(function(root) {
  'use strict';
  var TA = root.TA = root.TA || {};

  var EpisodeStub = JSON.parse('{"id":3,"podcast_id":1,"title":"TMO Daily Observations 2015-11-13: iPad Pro, Steve Jobs, and Amazon Listener Comments","episode_url":"http://mp3.macobserver.com/podcast/dailyobservations/tmodo_20151113.mp3","duration":"24:02","description":"It\u0026#39;s listener comment time on TMO\u0026#39;s Daily Observations, so Bryan Chaffin and John Martellaro join Jeff Gamet to respond to your thoughts on the iPad Pro, the Steve Jobs movie, and Amazon\u0026#39;s Seattle book store.","publication_date":"2015-11-13T18:26:00.000Z","feedjira_id":"tmo_podcasts86446","created_at":"2015-11-17T20:10:28.577Z","updated_at":"2015-11-17T20:10:28.577Z","mime_type":"audio/mpeg"}');
debugger
React.render(
  <TA.EpisodePlayer episode={EpisodeStub} />,
  document.getElementById("react")
);

}(this));
