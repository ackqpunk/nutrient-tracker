define(function(require) {

    var pubSub = this.PubSub;
    if (!pubSub) {
        pubSub = require('../../scripts/lib/PubSubJS/src/pubsub.js');
    }

    return {
        doesSubscriptionExist: doesSubscriptionExist,
        getChannel: getChannel,
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        getSubscribtions: getSubscriptions
    }

    function doesSubscriptionExist(channel, topic) {
        var obj = postal.subscriptions[channel][topic];
        return obj ? true : false;
    }

    function getChannel(channel, topic) {
        return postal.channel(channel, topic);
    }

    function publish(topic, data) {
        pubSub.publish(topic, data);
    }

    function subscribe(topic, callback) {
        pubSub.subscribe(topic, callback);
    }

    function unsubscribe(topic) {
        pubSub.unsubscribe(topic);
    }
    
    function getSubscriptions(){
        
    }
});