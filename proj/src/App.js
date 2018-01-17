import React from 'react';
import './App.css';

var h =  {
  rando : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getTime : function() {
      var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var d = new Date();
      var mon = month[d.getMonth()];
      var day = d.getDate();
      var year = d.getFullYear();
      var dateAll = mon + " " + day + ", " + year;
    
      return dateAll;
  },
  getTaggedName : function() {
    var adjectives = ['trusted', 'secure', 'hot', 'new', 'interesting', 'best practice', 'exciting'];
    
    var nouns = ['es6', 'browserify', 'webpack', 'gulp', 'reactDOM', 'devTools'];
    
    return this.rando(adjectives) + ' ' + this.rando(nouns);
  }
}

// App

class App extends React.Component {
  state = {
    posts : {}
  }

  addPost(post) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.posts['post-' + timestamp] = post;
    // set the state
    this.setState({ posts : this.state.posts });
  }

  renderPost(key) {
    return <NewPost key={key} index={key} details={this.state.posts[key]} />
  }

  render() {
    var imgOne = "https://c1.staticflickr.com/5/4762/39726456891_a73b96a891_b.jpg";
    var imgTwo ="https://c1.staticflickr.com/5/4695/24856943367_83c8aff053_b.jpg";
    var imgThree ="https://c1.staticflickr.com/5/4766/38808824345_c0eecb3e9e_z.jpg";
    var imgFour ="https://c1.staticflickr.com/5/4770/39695348102_2fd35e06b4_b.jpg";
    var imgFive ="https://c1.staticflickr.com/5/4620/38808824895_378ab9c393_b.jpg";
    var imgSix ="https://c1.staticflickr.com/5/4715/38808824535_f927acb586_b.jpg";
    var imgSeven ="https://c1.staticflickr.com/5/4763/38808824075_3f24e25711_b.jpg";
    var imgEight ="https://c1.staticflickr.com/5/4654/38808824775_166166282b_z.jpg";
    var postOne = "With all the hype around Bitcoin, I find it most apt that I should write my first article on understanding the cryptocurrency. Throughout, I will be analysing the bitcoin from an economic and investor’s standpoint. Beyond all the hype.";
    var postTwo = "To start off, I will attempt to draw similarities between bitcoin and the closest thing we have, Fiat currency, and hence evaluate from there.";
    var postThree = "The value of money is determined by demand for it, just like the value of goods and services. There are three ways to measure the value of the dollar. The first is how much the dollar will buy in foreign currencies. That’s what the exchange rate measures. Forex traders on the foreign exchange market determine exchange rates. They take into account supply and demand, and then factor in their expectations for the future.";
    var postFour = "For this reason, the value of money fluctuates throughout the trading day.The second method is the value of Treasury notes. They can be converted easily into dollars through the secondary market for Treasurys. When the demand for Treasurys is high, the value of U.S. dollars rises. Essentially a bond issued by the government, this is directly corelated with the interest rate.";
    var postFive = "For example, U.S. bond yields gauge the performance of the U.S. stock market, thereby reflecting the demand for the U.S. dollar.";
    var postSix = "Let’s look at one scenario: Demand for bonds usually increases when investors are concerned about the safety of their stock investments.";
    var postSeven = "This flight to safety drives bond prices higher and, by virtue of their inverse relationship, pushes bond yields down.";
    var postEight = "The third way is through foreign exchange reserves. That is the amount of dollars held by foreign governments. The more they hold, the lower the supply. That makes U.S. money more valuable. If foreign governments were to sell all their dollar and Treasury holdings, the dollar would collapse. U.S. money would be worth a lot less.";
    var postNine = "What are cryptocurrencies? Is it a bubble?";
    var postTen = "Now let me explain exactly what is cryptocurrencies. Borned after the financial crisis in 2009, it was originally created with the purpose of doing away with the existing banking system.It is a decentralized digital currency, a system which works without a central bank or single administrator. The network is peer-to-peer and transactions take place between users directly, without an intermediary. These transactions are verified by network nodes through the use of cryptography and recorded in a public distributed ledger called a blockchain. In countries where people are increasingly distrustful of how central banks and governments manage the economy, bitcoin may seem like a more sensible alternative.";
    var postEleven = "Now, let us compare traditional fiat currency to the Bitcoin. ";
    var postTwelve = "1.    The demand and supply market obviously exist within the crptocurrency market.";
    var postThirteen = "However when analysing as a currency, stability is key, which bring me to the next key subpoint on the intrinsic value of the currency, widespread adoption, and what it must occur to achieve that";
    var postFourteen = "1a)	The volatility of bitcoin will shrink as it becomes more widely adopted.";
    var postFifteen = "Comparing bitcoin to Ethereum, we see Ethereum having a 8000% in last year(2017). While bitcoin had a  2000% rally. Granted, comparing Bitcoin to Ethereum is often likened to comparing apples with orange. But it is undeniable that bitcoin is the more mature currency. It is not concrete proof of reduction in volatility. The larger it is, the harder to be manipulated.";
    var postSixteen = "1b) Volume: is it enough? What about flash crash? ";
    var postSeventeen = "The volume being traded indicates the volatility of the currency. Although often overlook, lack of volume can lead to flash crash(look at Ethereum briefly crashed from $319 to 10 cents in seconds on one exchange after ‘multimillion dollar’ trade.";
    var postEighteen = "From the data extracted from Etherscan, we can see that the largest holder of etheruem, (besides Poloniex, currently holds 1.58% of the entire pool of ethers. Assuming that these private accounts are owned by different people, and hence are not related, it seems quite unlikely that any single large whale is capable to achieve such a feat again, without backfiring. Volume in terms of USD has also increased tenfold since the flash crash in June 2017, from around 76 million USD daily to around 1 billion USD.";
    var postNineteen = "In conclusion, as long as you are trading with a reputable cryptocurrency  exchange with much larger volume, and close monitoring, avoiding stop setting hard stop, but use manual stop losses. ";
    var postTwenty = "   2. The inherent value ";
    var postTwentyOne = "2a)Investing Gurus of large banks such as Jamie Dimon has claimed Bitcoin to be a fraud. This is often backed by claims of the ability to “create a currency out of thin air”. However, we have to understand that there is something intangible yet valuable backing the currencies: the blockchain technology. As stated by  Don Tapscott, it is “ an incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value.”   ";
    var postTwentyTwo = " By storing blocks of information that are identical across its network, the blockchain cannot:";
    var postTwentyThree = "1.	Be controlled by any single entity.<br /> 2.	Has no single point of failure."
    var postTwentyFour = "2b)Updates:"
    var postTwentyFive = "Several codenamed prototypes of the Ethereum platform were developed by the Foundation(developers behind Ethereum). These planned protocols allow the currency to receive constant updates, staying relevant, in the everchanging and evolving  world of cryptocurrency. So this brings me to the second method to value, Treasury Notes. In a sense, as the fundamental behind treasury notes is the confidence of the government backing it, the strength of the cryptocurrency comes from the strong backing developers technology and widespread purpose in the respective currency.";
    var postTwentySix = ""

    return (
     
      <div>
         <Nav />
        <Banner />
        <div className="row medium-8 large-7 columns">
          <Post ptitle="Understanding the cryptocurrency" pimg1={imgOne} pimg2={imgTwo} pimg3={imgThree} pimg4={imgFour} pimg5={imgFive} pimg6={imgSix} pimg7={imgSeven} pimg8={imgEight} date="Jan 10, 2018" postbody1={postOne}
           postbody2={postTwo}
            postbody3={postThree} 
            postbody4={postFour} 
            postbody5={postFive}
            postbody6={postSix}
            postbody7={postSeven} 
            postbody8={postEight}
            postbody9={postNine} 
            postbody10={postTen} 
            postbody11={postEleven} 
            postbody12={postTwelve}
            postbody13={postThirteen}
            postbody14={postFourteen}
            postbody15={postFifteen}
            postbody16={postSixteen}
            postbody17={postSeventeen}
            postbody18={postEighteen}
            postbody19={postNineteen}
            postbody20={postTwenty}
            postbody21={postTwentyOne}
            postbody22={postTwentyTwo}
            postbody23={postTwentyThree}
            postbody24={postTwentyFour}
            postbody25={postTwentyFive}
            postbody26={postTwentySix}
              author="Ho Jin Kind" comments="2" />
          
      
          <div className="list-of-posts">
              {Object.keys(this.state.posts).map(this.renderPost)}
          </div>
          <AddPostForm addPost={this.addPost}/>
        </div>
      </div>
    )
  }
}


/*
  Add Post Form
  <AddPostForm />
*/

class AddPostForm extends React.Component {
  createPost(event) {
    event.preventDefault();
    // take the data from the form and create an object
    var post = {
      title : this.refs.title.value,
      name : this.refs.name.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // add the post to the App State
    this.props.addPost(post);
    this.refs.postForm.reset();
  }

  render() {
    return (
      <div className="callout secondary form-area">
      <h5>Add a Post to the React Blog</h5>
        <form className="post-edit" ref="postForm" onSubmit={this.createPost}>
          <label>Post Title
            <input type="text" ref="title" placeholder="Post Title" required/>
          </label>
          <label>Author Name
            <input type="text" ref="name" placeholder="Full Name required" required/>
          </label>
          <label>Post Body
          <textarea
            ref="desc"
            placeholder="Write your post here" required/>
          </label>
          <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
            <input type="url" ref="image" placeholder="The URL of the featured image for your post" required/>
          </label>
          <button type="submit" class="button">Add Post</button>
        </form>
      </div>
    )
  }
}



/*
  NewPost
  <NewPost />
*/

class NewPost extends React.Component {
  render() {
    var details = this.props.details;
    return (
      <div className="blog-post">
        <h3 className="ptitle">{details.title}<small>{h.getTime()}</small></h3>
        <img className="thumbnail" src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
          <li><a href="#">Author: {details.name}</a></li>
          <li><a href="#">Comments: 0</a></li>
          <li><a href="#">Tags: {h.getTaggedName()}</a></li>
          </ul>
        </div>
      </div>
    )
  }
}



class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar">
          <ul className="menu">
            <li className="menu-text">TFN</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    )
  }
}


class Banner extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="big-banner">
          <div className="callout large primary">
            <div className="row column text-right">
              <h1> The Financial Novice</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// Blog Post
class Post extends React.Component {
  tryClick() {
    alert('just trying out click events lalala');
  }

  render() {
    var com = "Comments";
    return (
      <div className="blog-post">
        <h3 className="ptitle">{this.props.ptitle}<small>{this.props.date}</small></h3>
        <img className="thumbnail" src={this.props.pimg1} />
        <p>{this.props.postbody1}</p>
        <img className="thumbnail" src={this.props.pimg2} />
        <p>{this.props.postbody2}</p>
        <p>{this.props.postbody3}</p>
        <p>{this.props.postbody4}</p>
        <img className="thumbnail" src={this.props.pimg3} />
        <p>{this.props.postbody5}</p>
        <p>{this.props.postbody6}</p>
        <p>{this.props.postbody7}</p>
        <p>{this.props.postbody8}</p>
        <img className="thumbnail" src={this.props.pimg4} />
        <p>{this.props.postbody9}</p>
        <p>{this.props.postbody10}</p>
        <p>{this.props.postbody11}</p>
        <p>{this.props.postbody12}</p>
        <p>{this.props.postbody13}</p>
        <p>{this.props.postbody14}</p>
        <p>{this.props.postbody15}</p>
        <p>{this.props.postbody16}</p>
        <img className="thumbnail" src={this.props.pimg5} />
        <p>{this.props.postbody17}</p>
        <img className="thumbnail" src={this.props.pimg6} />
        <p>{this.props.postbody18}</p>
        <img className="thumbnail" src={this.props.pimg7} />
        <p>{this.props.postbody19}</p>
        <p>{this.props.postbody20}</p>
        <p>{this.props.postbody21}</p>
        <p>{this.props.postbody22}</p>
        <p>{this.props.postbody23}</p>
        <p>{this.props.postbody24}</p>
        <p>{this.props.postbody25}</p>
        <img className="thumbnail" src={this.props.pimg8} />
        <p>{this.props.postbody26}</p>
        <p>{this.props.postbody27}</p>
        <div className="callout callout-post">
          <ul className="menu simple">
          <li><a href="#" onClick={this.tryClick}>Author: {this.props.author}</a></li>
          <li><a href="#">{com}: {this.props.comments}</a></li>
          </ul>
        </div>
      </div>
    )
  }
}




//instead of ReactDOM like in the video:

// React.render(<App/>, document.querySelector("#main"));

//polyfill for key
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

//header scroll stuff
window.onscroll = function(e) {  
  var nav = document.getElementsByClassName("top-bar")[0],
      banner = document.getElementsByClassName("big-banner")[0],
      range = 70,
      scrollTop = document.body.scrollTop;
  
  if (scrollTop > range) {
      nav.classList.add("scrollNav");
      banner.classList.add("blurred");
    }
    else {
      nav.classList.remove("scrollNav");
      banner.classList.remove("blurred");
  }
};

export default App