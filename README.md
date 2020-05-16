# MongoDB

The goal of this assignment is for you to gain familiarity with MongoDB, one of the most widely-used tools for the management and querying of big, unstructured data.

MongoDB uses the JSON (and related BSON) format for data, as we saw in class.
The MongoDB shell provides an interactive JavaScript interface to MongoDB.
We will provide JavaScript templates for each question so that you can see how the syntax works.

https://docs.mongodb.com/manual/mongo/

To install mongodb on your virtual machine, connect via SSH using the key you were given previously, and at the prompt run

```sh
sudo yum remove -y mongodb-org
```

```sh
sudo curl https://www.csd.uwo.ca/~dlizotte/mongodb.repo -o /etc/yum.repos.d/mongodb-org.repo
sudo yum install -y mongodb-org
```

Then start your server with the following command. (This may take a minute or two.)
```sh
sudo service mongod start
```

You can then import our example twitter data, contained in the tweets.json file in your home directory, by typing
```
curl https://www.csd.uwo.ca/~dlizotte/tweets.json -o tweets.json
mongoimport --db test --collection tweets --file tweets.json
```

MongoDB organizes data into databases and collections. In this case, you will use the test database and the tweets collection of documents.

MongoDB uses its own shell that allows users to run queries. To start the shell, run the following command:
```
mongo
```
Once you have started the shell, to access the test database, type

```
use test
```

Having done so, you can now access the tweets collection. For example, to print an example tweet, type
```
db.tweets.findOne()
```

Have a look at the resulting JSON object. You may want to review the JSON slides in the Structure of Unstructured Data topic on OWL.

MongoDB queries are written in JavaScript. They are in some ways analogous to SQL. The following tutorial has many examples:

https://docs.mongodb.com/v4.2/tutorial/query-documents/

The following reference page gives the different operators that can be used in queries:

https://docs.mongodb.com/v4.2/reference/operator/query/

For this assignment, we recommend you compose your queries in a local file on your computer, and copy-and-paste it into the mongo shell to try them out.

If you find the output of your queries hard to read, you can append .pretty() to them to produce indented output.

1) Retrieve all tweets that are replying to the user with screen name “globeandmail”
2) Retrieve all tweets made by the user with screen name “MLHealthUnit”
Submit a file called aggregations.js that contains a query for each of the following questions, using the MongoDB aggregation framework.

Aggregations in MongoDB are summaries of a collection. They are similar in concept to the operations performed in a MapReduce. MongoDB aggregations are more restrictive than MapReduce, but their implementation is very efficient. See the following documents for details.

https://docs.mongodb.com/v4.2/core/aggregation-introduction/

https://docs.mongodb.com/manual/reference/operator/aggregation/

3) Produce a list of users, together with the total number of times they tweeted, sorted in decreasing order.
4) Produce a list of place names, together with the total number of tweets from that place name, sorted in decreasing order.
5) Produce a list of users, together with the total number of replies to that user, sorted in decreasing order.
6) Produce a list of users, together with the total number of hashtags used by that user, sorted in decreasing order.
Submit a file called mapreduce.js that provides a mapper, reducer, and mongodb query to answer the question below.
7) Produce a new collection that contains each hashtag used in the collection of tweets, along with the number of times that hashtag was used.


