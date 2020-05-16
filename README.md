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


