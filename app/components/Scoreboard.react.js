var React = require('react');
var TopicActions = require('../actions/TopicActions');
var TopicCountItem = require('./TopicCountItem.react');

var Scoreboard = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
    var topicListItems = this.props.topics.map(function(topic){
      return (<TopicCountItem key={topic.get('id')} title={topic.get('text')} count={topic.get('count')}/>);
    });

  	return (
      <div className="scoreboard">
        <h3 className="scoreboard__header">Vote count</h3>
        <ul className="scoreboard__list">
          {topicListItems}
        </ul>
      </div>
    );
  }

});

module.exports = Scoreboard;