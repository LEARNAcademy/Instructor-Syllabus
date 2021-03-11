# How the Internet Works for Full Stack Developers

## Concepts to Cover
- CRUD
- HTTP Verbs
- API
- JSON
- RESTful architecture


## Lectures
The internet is the largest machine on earth. It is a lot like the colony of quaking aspens that have interconnected roots.

In the most fundamental way the internet is a series of tubes that connects servers all over the world. And really a server is just a computer with all the user aspects stripped away.

So your computer is a server. When you run "yarn start" you asking your computer to act as a local server.

But if something is hosted - meaning it can be found on the internet with a url - the content must stored somewhere on a server, or more likely, many servers.

So when we deploy to GitHub pages or Heroku, you are asking that service to store your code on their servers and provide you with the path to find that information in the form of a url.

The long and short of the internet from a developer’s point of view is it is a series of requests and responses. Every time you hit enter on a url, or navigate to a new page within an application, or enter info on a form, or post a picture, or click on a “show more” link, anything that gives you a new view is a new request-response cycle. And development is creating code that makes successful cycles.

Request-response cycles follow HTTP which stands for hypertext transfer protocol. HTTP is a collection of agreed upon rules to make this cycle consistent and successful.

There is a difference between HTTP and HTTPS. The S stands for secure. HTTPS request/response cycle are encrypted to secure data. It used to be a bit more impressive to have a HTTPS website, but now your computer will often notify you if you are on a page that isn't HTTPS. You'll get a little popup or you can see a "Not secure" notice in the URL bar.

**Extra content:** HTTPS is an extension of HTTP. It is encrypted using a third party so is usually a paid service. If the response is intercepted it will be encrypted. This prevents eavesdropping and man-in-the-middle attacks. (WIP)

Within the request-response protocol cycle there are four main parts. Two on the request and two on the response.

- The request consists of 1) a location and 2) an action
- The response consists of 3) a status code and 4) the payload

### Location
So let’s start with the request. This request-response cycle starts when you hit enter on a url. A url which stands for uniform resource locator. You do not need to memorize that.

So URLs all correspond to an IP address. An IP address is the physical location of the server that is storing the information you want to see. The server is the location.

**Just a side note if anyone asks:** An IP address is a set of 4 numbers divided by periods. Each number of the four numbers is between 0-255 because 255 is the largest number that can be represented by one byte. A byte is a unit of storage that can hold up to 8 binary digits. Meaning any combination of up to 8 ones and zeros which represents the numbers 0-255.  Development is basically translating things from human readable information to computer readable information and this is a perfect example of that. URLs are for humans. IP addresses are for computers. Most of us don’t process information in octets of base-10 representations of base-2 numbers.

So the first challenge we have in our request-response cycle is mapping the URL to an IP address. There is a lot going on here. It starts with your ISP - internet service provider and ripples out slowly to the LAN - the local area network, and continues on up the chain. This takes a lot of “work” from an energy and processing standpoint to “look up” an IP address.

So to help reduce the work that is involved your computer or phone will store information about websites you visit regularly. It basically is remembering how to "find" that website without going through the process of looking it up. That is called caching. Caching increases speed dramatically. It would be like dialing a phone number vs looking up a phone number in a phone book and then dialing it. So for the user, this is great. And for the developer it can also be great - we like speed. But, it can cause problems if you are making changes to a page and your user's computer is "remembering" the old page. So it is something to be aware of as you move into the real world.


### Action
So along with the location the second thing that makes up the request is the action. The action describes the type of request we are making. Developers have to specify a type of action in their code. There is a “best practice” developers follow called a RESTor RESTful architecture pattern. We are going to talk a lot about RESTful routes next week.

There are four main actions you would want to achieve with your code.

1) displaying content
2) creating content
3) editing content
4) deleting content

There is a delightful acronym for these actions: CRUD

Create, read, update, delete. All full-stack applications should have the ability to do these actions where appropriate. You may have heard people refer to getting "full CRUD" or "full CRUD capability" on their websites.

Zoom:
C - I can create an account, I can create a meeting, I can schedule a meeting for the future
R - I can see a dashboard, I can see a list of meetings
U - I can edit the information regarding the meeting
D - A can delete a meeting

Lyft:
C - I can create a new instance of a ride
R - I can see the dashboard, I can see the driver's info
U - I can change the pick up or drop off address
D - I can cancel a ride, or delete that instance of a ride


In order to perform each CRUD action, you have to specify the type of HTTP request you are making.

A “get request” is for seeing content
A “post request” is for creating content
A “put request,” is for replacing the entire content of existing entry
A "patch request" is for editing part of the existing content
A "delete request" is pretty self explanatory

These are referred to as HTTP verbs. Get, Post, Put/Patch are often lumped together, and Delete.

Each HTTP Verb corresponds to a CRUD action. I don't ask you to memorize many things. But in this case, it would be wise to memorize these or at least have them very handy.


Following RESTful architecture gives you specific URL routes that you should code into your program.

And that is the request - finding the server and specifying an action.

So, our request finds the server and the server responds. Which brings us to the third thing on the list.

### Response Code
Response codes are a tool developers use to provide information about the request-response cycle. Every request gets a response. But sometimes those responses are successes and sometimes they are errors. By giving those responses a code, developers can tell the application what to do.

**If** the response code says all good, then go ahead and load the page. **Else** communicate to the user that there is a problem. Never leave your user with a blank page.

One of the most well known response codes is a 404 - information not found. This is used as a generic, catchall for “something about your request is wrong.” There is an error coming from the client side of the request-response cycle. If that happens, and it does, developers can code in pages to their application that will display cute error messages and possibly give instructions to the user on how to fix the problem.

Cool error messages
GitHub error message: https://github.com/fjdkslajkjl

This page was coded by the development team so **if** the response code comes back as a 404, load this content. Load a header and nav bar and links to the user can find their way back to wherever they need to go.

**Double check this link**
Really cool error message
https://learnstaff.slack.com/archives/G0122DF59QS/p1589227442000100

So let's look at Cat codes:
A response code in the 100s is informational, I think there are only a couple of 100 level responses.

200s are okay. All is good. This is what we want.

300s are redirects. The thing you are looking for isn’t here anymore or this request sent you to the wrong place.

400s again are a client side error, so something about the request was wrong. There are lots of status codes in the 400s because that is a pretty common mistake.

And 500s are a server side error, meaning the request was good but for some reason the server isn’t able to provide what we are looking for.

**Extra content if someone asks:** There is a funny story behind the 418 code. This name of this code is "I’m a teapot." It was created as an April Fool’s day joke in 1998. The joke was that as much as we all love HTTP (which was created in 1989 so it was still pretty young) but as much as we all love HTTP there really should be a HTCPCP - or Hyper Text Coffee Pot Control Protocol for the very specific time that a coffee pot needs to transmit documents over the internet for controlling, monitoring and diagnosing coffee pots. So it continues that any attempt to brew coffee with a teapot should result in the error code 418 - I’m a teapot. The error code description is: The resulting entity body may be short and stout. This joke lingered for many years as a weird internet easter egg, but a few years ago someone - whom I can only assume is in need of a hug - decided to get rid of 418 as it serves really no practical purpose. Well, some people had a very different opinion about that. A 15 year old mounted a crusade to save 418. Reddit got a hold of this and blew it up. So we still have 418. You can check out save418.com if you would like to help ensure this awesome piece of internet history is preserved.


### Payload
So the payload of the Hyper Text Transfer Protocol is Hyper Text Markup Language or HTML. So you know that everything is wrapped is wrapped up and delivered inside HTML. But there is a lot of content that exists on the internet that is not UI. There has to be a way to send content around the internet that can then populate the UI.

So there are websites that are just used by computers to pull data. These are called APIs. API stands for Application Programming Interface. Where a "normal," user-facing website has pages, an API has endpoints.

As a developer, you use existing APIs. Many of them are free and open-source. APIs have data. Spotify has an API, IMDB has an API, NYT has an API, any major website or app that is storing data or content and offering it to the user in exchange for money, has an API. So if you need content for an application that you probably want to use a collection of content that already exists in the world. So you would probably use an external API.

But you also will want to create your own API that stores the content your users "post" to your application.

So if you have content coming from somewhere - either from another entity that you are referencing, or in your own application, you still need to package up and pass around this data. If you are a good developer and you don't hate the world, you will follow a RESTful architecture pattern and in doing such you will pass around data as JSON.

Look at the github api:
https://api.github.com/

This is JSON. It is just a collection of key/value pairs.
Inspect the page and see it is still wrapped in HTML.

One of the key/value pairs 4th from the bottom says:  "user_url": "https://api.github.com/users/{user}",

So I can follow that and look at the JSON of my GitHub page.

https://api.github.com/users/sjproctor

Then curl in the terminal.
curl https://api.github.com/users/sjproctor
curl https://api.github.com/zen

Here is another API that is interesting:
http://www.omdbapi.com/

Look at the Poster API notice.
RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.

Over the next two weeks we are going to spend time creating APIs as well as playing around with external APIs.
