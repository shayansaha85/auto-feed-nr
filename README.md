# About it

This is a simple Nerdpack script designed specifically for sending data to New Relic through API calls. The script makes a single API call, fetches the data, and pushes it to New Relic. The goal is to continuously send data to New Relic for as long as the Nerdpack is open.


### Steps to use it
---

<br>

* Install NodeJS - [Link](https://nodejs.org/en/download/package-manager)
* Install New Relic One (nr1) cli - [Link](https://docs.newrelic.com/docs/new-relic-solutions/build-nr-ui/build-ab-app/install-cli/)
* Clone the repository

```bash
git clone https://github.com/shayansaha85/auto-feed-nr.git
```

* Open terminal in the repository location
* Install all dependencies by running the below command :

```bash
npm install
```

* Install **axios** explicitly

```bash
npm install axios
```

* Create a new UUID for the Nerdpack by running the below command :

```bash
nr1 nerdpack:uuid -gf
```

* In nerdlets/home/index.js, update account ID and Insights Key which is required to send the data to New Relic

* Serve the nerdpack by running below command. The application can be seen by hitting the URL https://one.newrelic.com/?nerdpacks=local

```bash
nr1 nerdpack:serve
```

* For deployment use below command :

```bash
nr1 nerdpack:publish
```
