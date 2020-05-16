//3)

db.tweets.aggregate([
    { $group: { _id: "$user.name", total_tweets: { $sum: 1 } } },
    { $sort: { total_tweets: -1 } }
])


//4)
db.tweets.aggregate([
    { $group: { _id: "$place.full_name" , total_tweets: { $sum: 1 } } },
    { $sort: { total_tweets: -1 } }
])

//5)
db.tweets.aggregate([
    { $group: { _id : "$in_reply_to_screen_name" , total_tweets: { $sum: 1 } } },
    { $sort: { total_tweets: -1 } }
])

//6)
db.tweets.aggregate([
    { $unwind: "$entities.hashtags"},
    { $group : { _id :"$user.screen_name", hashtags : { $sum : 1 } } },
    { $sort : { "hashtags" : -1 } }
  ])
