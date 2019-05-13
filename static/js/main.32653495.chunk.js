(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(262)},139:function(e,t,a){},140:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),s=a.n(l),i=(a(139),a(44)),o=a(26),c=a(56),m=a(9),u=a(10),d=a(17),p=a(11),h=a(18),f=(a(140),function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"organizeHeader"},"Want to Organize a Game?"),r.a.createElement("div",null,r.a.createElement("button",{id:"organizeButton",onClick:function(t){return e.organizeGame(t)},className:"ui button",type:"submit"},"Organize")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/130828123801-michael-jordan-iso-1998-all-star-game.video-player.jpg?itok=6H7vzj5I",id:"pic",alt:"Michael Jordan"})))}),b=function(e){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"navBarButtons",onClick:function(t){return e.logMeOut(t)}},"Log Out"),r.a.createElement("button",{className:"navBarButtons",onClick:function(t){return e.handleMyUpcomingGames(t)}},"My Upcoming Games"),r.a.createElement("button",{type:"submit",className:"navBarButtons",onClick:function(){return e.handleMyCreatedGames(e.game)}},"My Created Games")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h2",{className:"uiheader"},"Welcome to Pickup ",e.name.charAt(0).toUpperCase()+e.name.slice(1),"! Choose Your Sport!")),r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.showBasketballCards(t)},className:"searchButtons",type:"submit"},"Basketball ",r.a.createElement("span",{role:"img",className:"emoji","aria-label":"basketball"},"\ud83c\udfc0"))),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.showGolfCards(t)},className:"searchButtons",type:"submit"},"Golf",r.a.createElement("span",{role:"img","aria-label":"golf"}," \u26f3"))),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.showSoccerCards(t)},className:"searchButtons",type:"submit"},"Soccer",r.a.createElement("span",{role:"img","aria-label":"soccer"}," \u26bd"))),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(t){return e.showBaseballCards(t)},className:"searchButtons",type:"submit"},"Baseball",r.a.createElement("span",{role:"img","aria-label":"baseball"}," \u26be"))))))},y=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b,{showBasketballCards:this.props.showBasketballCards,showGolfCards:this.props.showGolfCards,showSoccerCards:this.props.showSoccerCards,showBaseballCards:this.props.showBaseballCards,handleMyCreatedGames:this.props.handleMyCreatedGames,handleMyUpcomingGames:this.props.handleMyUpcomingGames,logMeOut:this.props.logMeOut,name:this.props.name})),r.a.createElement("div",null,r.a.createElement(f,{organizeGame:this.props.organizeGame})),r.a.createElement("div",null))}}]),t}(n.Component),G=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment",id:"gameform"},r.a.createElement("h4",null,"Create a Game"),r.a.createElement("form",{className:"ui form",onSubmit:function(t){return e.props.createGame(t,e.state)}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Sport"),r.a.createElement("select",{className:"ui fluid dropdown",name:"sport"},r.a.createElement("option",{value:"Basketball"},"Basketball"),r.a.createElement("option",{value:"Golf"},"Golf"),r.a.createElement("option",{value:"Soccer"},"Soccer"),r.a.createElement("option",{value:"Baseball"},"Baseball"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"City"),r.a.createElement("select",{className:"ui fluid dropdown",name:"city"},r.a.createElement("option",{value:"Seattle"},"Seattle"),r.a.createElement("option",{value:"Tacoma"},"Tacoma"),r.a.createElement("option",{value:"Bellingham"},"Bellingham"),r.a.createElement("option",{value:"Spokane"},"Spokane"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Location"),r.a.createElement("input",{type:"text",name:"address",required:!0,placeholder:"Enter Location of Game"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Date/Time"),r.a.createElement("label",null,"(Ex: Sat, May 18 2:30PM)"),r.a.createElement("input",{type:"text",name:"date",required:!0,placeholder:"Enter Both Date and Time"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Price"),r.a.createElement("input",{type:"text",name:"price",required:!0,placeholder:"Enter 'Free' or Cost to Play"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Contact Number/Email"),r.a.createElement("input",{type:"text",name:"contact",required:!0,placeholder:"Enter Phone Number or Email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Confirmed Number of Players"),r.a.createElement("input",{type:"number",name:"confirmed",required:!0,placeholder:"Enter at Least '1'"})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit")))}}]),t}(r.a.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("div",null,r.a.createElement(G,{createGame:this.props.createGame})))}}]),t}(r.a.Component),C=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",{className:"cityHeader"},"Search by City")),r.a.createElement("form",{onSubmit:function(t){return e.filterCities(t)}},r.a.createElement("select",{id:"cityDropdown",name:"cities"},r.a.createElement("option",{value:"Seattle"},"Seattle"),r.a.createElement("option",{value:"Tacoma"},"Tacoma"),r.a.createElement("option",{value:"Bellingham"},"Bellingham"),r.a.createElement("option",{value:"Spokane"},"Spokane"))," ",r.a.createElement("input",{id:"dropDownSubmit",type:"submit",style:{color:"black",backgroundColor:"silver"}})))},E=a(266),v=a(267),k=function(e){return r.a.createElement(E.a,{description:r.a.createElement("div",{className:"meta text-wrap"},"Sport: ",e.game.sport,r.a.createElement("br",null),"City: ",e.game.city,r.a.createElement("br",null),"Address: ",e.game.address,r.a.createElement("br",null),"Date/Time: ",e.game.date,r.a.createElement("br",null),"Price: ",e.game.price,r.a.createElement("br",null),"Contact of Organizer: ",e.game.contact,r.a.createElement("br",null),"Confirmed Players: ",e.game.confirmed,r.a.createElement("hr",null),r.a.createElement(v.a,{onClick:function(){e.increasePlayers(e.game),e.confirmGame(e.game)},type:"submit"},"Confirm Play")),centered:!0})},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemPerRow:1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<800?this.setState({itemPerRow:1}):this.setState({itemPerRow:3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("div",null,r.a.createElement(C,{filterCities:this.props.filterBasketballCities})),r.a.createElement("div",{className:"ui segment",id:"basketballCardBackground"},r.a.createElement(E.a.Group,{centered:!0,itemsPerRow:this.state.itemPerRow},this.props.displayBasketballGames.map(function(t,a){return r.a.createElement(k,{confirmed:e.props.confirmed,game:t,key:a,increasePlayers:e.props.increasePlayers,confirmGame:e.props.confirmGame,buildConfirmGameObject:e.props.buildConfirmGameObject})}))))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemPerRow:1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<800?this.setState({itemPerRow:1}):this.setState({itemPerRow:3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("div",null,r.a.createElement(C,{filterCities:this.props.filterGolfCities})),r.a.createElement("div",{className:"ui segment",id:"golfCardBackground"},r.a.createElement(E.a.Group,{centered:!0,itemsPerRow:this.state.itemPerRow},this.props.displayGolfGames.map(function(t,a){return r.a.createElement(k,{confirmed:e.props.confirmed,game:t,key:a,increasePlayers:e.props.increasePlayers,confirmGame:e.props.confirmGame,buildConfirmGameObject:e.props.buildConfirmGameObject})}))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemPerRow:1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<800?this.setState({itemPerRow:1}):this.setState({itemPerRow:3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("div",null,r.a.createElement(C,{filterCities:this.props.filterSoccerCities})),r.a.createElement("div",{className:"ui segment",id:"soccerCardBackground"},r.a.createElement(E.a.Group,{centered:!0,itemsPerRow:this.state.itemPerRow},this.props.displaySoccerGames.map(function(t,a){return r.a.createElement(k,{confirmed:e.props.confirmed,game:t,key:a,increasePlayers:e.props.increasePlayers,confirmGame:e.props.confirmGame,buildConfirmGameObject:e.props.buildConfirmGameObject})}))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={itemPerRow:1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<800?this.setState({itemPerRow:1}):this.setState({itemPerRow:3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("div",null,r.a.createElement(C,{filterCities:this.props.filterBaseballCities})),r.a.createElement("div",{className:"ui segment",id:"baseballCardBackground"},r.a.createElement(E.a.Group,{centered:!0,itemsPerRow:this.state.itemPerRow},this.props.displayBaseballGames.map(function(t,a){return r.a.createElement(k,{confirmed:e.props.confirmed,game:t,key:a,increasePlayers:e.props.increasePlayers,confirmGame:e.props.confirmGame,buildConfirmGameObject:e.props.buildConfirmGameObject})}))))}}]),t}(n.Component),j=function(e){return r.a.createElement(E.a,{description:r.a.createElement("div",{className:"meta text-wrap"},"Sport: ",e.game.sport,r.a.createElement("br",null),"City: ",e.game.city,r.a.createElement("br",null),"Address: ",e.game.address,r.a.createElement("br",null),"Date/Time: ",e.game.date,r.a.createElement("br",null),"Price: ",e.game.price,r.a.createElement("br",null),"Contact of Organizer: ",e.game.contact,r.a.createElement("hr",null),r.a.createElement(v.a,{onClick:function(t){return e.handleDeleteGame(e.game.id)}},"Delete Game")),centered:!0})},P=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleDeleteGame=function(e){console.log(e),alert("You have officially bailed on this game and let down the squad :(");var t=a.state.displayMyCreatedGames.filter(function(t){return t.id!==e});a.setState({displayMyCreatedGames:t}),fetch("https://pickupbackend.herokuapp.com/api/v1/organized_games/"+e,{method:"DELETE"}),a.props.removeCreatedGame(e)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.allGames.filter(function(e){return e.user_id===t.props.user_id}),this.setState({displayMyCreatedGames:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("header",{className:"gamesHeader"},"Games You're Runnin'")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui segment",id:"myCreatedGamesBackground"},r.a.createElement(E.a.Group,null,this.state.displayMyCreatedGames?this.state.displayMyCreatedGames.map(function(t,a){return r.a.createElement(j,{game:t,key:a,handleDeleteGame:e.handleDeleteGame})}):null)))}}]),t}(n.Component),M=function(e){return r.a.createElement(E.a,{description:r.a.createElement("div",{className:"meta text-wrap"},"Sport: ",e.game.organized_game.sport,r.a.createElement("br",null),"City: ",e.game.organized_game.city,r.a.createElement("br",null),"Address: ",e.game.organized_game.address,r.a.createElement("br",null),"Date/Time: ",e.game.organized_game.date,r.a.createElement("br",null),"Price: ",e.game.organized_game.price,r.a.createElement("br",null),"Contact of Organizer: ",e.game.organized_game.contact,r.a.createElement("hr",null),r.a.createElement(v.a,{onClick:function(t){return e.handleUnconfirm(e.game.id)}},"Bail On the Squad")),centered:!0})},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleUnconfirm=function(e){console.log(e),alert("You have officially bailed on this game. We understand things come up, but if you confirm, please try to make the game!!");var t=a.state.displayMyConfirmedGames.slice().filter(function(t){return t.id!==e});fetch("https://pickupbackend.herokuapp.com/api/v1/confirmations/"+e,{method:"DELETE"}),a.setState({displayMyConfirmedGames:t}),a.props.removeConfirmedGame(e)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=this.props.allConfirmedGames.filter(function(e){return e.user.id===t.props.user_id}),this.setState({displayMyConfirmedGames:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"homeButton",onClick:this.props.homePageClick,type:"submit"},"Home")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("header",{className:"gamesHeader"},"Your Upcoming Games")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui segment",id:"myCreatedGamesBackground"},r.a.createElement(E.a.Group,null,this.state.displayMyConfirmedGames?this.state.displayMyConfirmedGames.map(function(t,a){return r.a.createElement(M,{game:t,key:a,handleUnconfirm:e.handleUnconfirm})}):null)))}}]),t}(n.Component),D=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"loginParentDiv"},r.a.createElement("form",{className:"ui form",id:"loginForm",onSubmit:function(t){return e.props.logMeIn(t)}},r.a.createElement("br",null),r.a.createElement("h4",{className:"uiDividingHeader"},"Enter User Credentials "),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",name:"userName",placeholder:"Enter Username",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",autoComplete:"password",required:!0})),r.a.createElement("button",{id:"loginButton",className:"ui button",type:"submit"},"Submit")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{src:"https://uproxx.files.wordpress.com/2018/02/mitchell.jpg?quality=100&w=650",id:"loginImg",alt:"Donovan Mitchell"})))}}]),t}(r.a.Component),z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={allGames:[],basketballByCity:[],displayBasketballGames:[],displayGolfGames:[],displaySoccerGames:[],displayBaseballGames:[],displayMyCreatedGames:[],displayMyConfirmedGames:[],allConfirmedGames:[],showCreateForm:!1,showBasketballGames:!1,showGolfGames:!1,showSoccerGames:!1,showBaseballGames:!1,showHomePage:!1,myCreatedGames:!1,showMyCreatedGames:!1,showMyUpcomingGames:!1,loggedIn:!1,currentUser:"",name:"",password:"",confirmed:""},a.homePageClick=function(e){a.setState({showCreateForm:!1,showBasketballGames:!1,showGolfGames:!1,showSoccerGames:!1,showBaseballGames:!1,showMyCreatedGames:!1,showMyUpcomingGames:!1,showHomePage:!0})},a.logMeIn=function(e){console.log("logging in"),e.preventDefault();var t={name:e.target.userName.value,password:e.target.password.value};a.setState(t),a.setState({loggedIn:!0}),fetch("https://pickupbackend.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a.setState({user_id:e.id})})},a.logMeOut=function(e){console.log("logging out"),a.setState({loggedIn:!1,showHomePage:!1})},a.handleUpdateFilter=function(){fetch("https://pickupbackend.herokuapp.com/api/v1/organized_games").then(function(e){return e.json()}).then(function(e){return a.setState({allGames:e},function(){return a.sortSports()})}).catch(function(e){console.log(e)})},a.getConfirmedGames=function(){return fetch("https://pickupbackend.herokuapp.com/api/v1/confirmations").then(function(e){return e.json()}).then(function(e){return a.setState({allConfirmedGames:e})}).catch(function(e){console.log(e)})},a.removeConfirmedGame=function(e){var t=a.state.allConfirmedGames.slice().filter(function(t){return t.id!==e});a.setState({allConfirmedGames:t})},a.removeCreatedGame=function(e){var t=a.state.allGames.slice().filter(function(t){return t.id!==e});a.setState({allGames:t})},a.sortSports=function(){var e=a.state.allGames.filter(function(e){return"Basketball"===e.sport}),t=a.state.allGames.filter(function(e){return"Golf"===e.sport}),n=a.state.allGames.filter(function(e){return"Soccer"===e.sport}),r=a.state.allGames.filter(function(e){return"Baseball"===e.sport});a.setState({displayBasketballGames:e,displayGolfGames:t,displaySoccerGames:n,displayBaseballGames:r,basketballByCity:e,golfByCity:t,soccerByCity:n,baseballByCity:r})},a.handlefilterBySport=function(e,t,n){fetch("https://pickupbackend.herokuapp.com/api/v1/organized_games").then(function(e){return e.json()}).then(function(r){var l=r.filter(function(t){return t.sport===e}).filter(function(e){return e.city===t});a.setState(Object(c.a)({},n,l))})},a.filterBasketballCities=function(e){e.preventDefault(),console.log(e.target.cities.value);var t=e.target.cities.value;a.handlefilterBySport("Basketball",t,"displayBasketballGames")},a.filterGolfCities=function(e){e.preventDefault();var t=e.target.cities.value;a.handlefilterBySport("Golf",t,"displayGolfGames")},a.filterSoccerCities=function(e){e.preventDefault();var t=e.target.cities.value;a.handlefilterBySport("Soccer",t,"displaySoccerGames")},a.filterBaseballCities=function(e){e.preventDefault();var t=e.target.cities.value;a.handlefilterBySport("Baseball",t,"displayBaseballGames")},a.createGame=function(e,t){e.preventDefault();var n={sport:e.target.sport.value,city:e.target.city.value,address:e.target.address.value,date:e.target.date.value,price:e.target.price.value,contact:e.target.contact.value,confirmed:e.target.confirmed.value,user_id:a.state.user_id};a.setState({displayMyCreatedGames:[].concat(Object(o.a)(a.state.displayMyCreatedGames),[n])}),fetch("https://pickupbackend.herokuapp.com/api/v1/organized_games",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){return a.setState({allGames:[].concat(Object(o.a)(a.state.allGames),[e])})}).catch(function(e){console.log(e)}),"Basketball"===e.target.sport.value?(alert("Game successfully created. To view game, visit the 'Basketball' section"),a.setState({displayBasketballGames:[].concat(Object(o.a)(a.state.displayBasketballGames),[n])})):"Golf"===e.target.sport.value?(alert("Game successfully created. To view game, visit the 'Golf' section"),a.setState({displayGolfGames:[].concat(Object(o.a)(a.state.displayGolfGames),[n])})):"Soccer"===e.target.sport.value?(alert("Game successfully created. To view game, visit the 'Soccer' section"),a.setState({displaySoccerGames:[].concat(Object(o.a)(a.state.displaySoccerGames),[n])})):"Baseball"===e.target.sport.value&&(alert("Game successfully created. To view game, visit the 'Baseball' section"),a.setState({displayBaseballGames:[].concat(Object(o.a)(a.state.displayBaseballGames),[n])}))},a.confirmGame=function(e){var t;a.setState({displayMyConfirmedGames:[].concat(Object(o.a)(a.state.displayMyConfirmedGames),[e])}),t={organized_game_id:e.id,user_id:a.state.user_id},fetch("https://pickupbackend.herokuapp.com/api/v1/confirmations",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a.setState({allConfirmedGames:[].concat(Object(o.a)(a.state.allConfirmedGames),[e])})}).catch(function(e){console.log(e)})},a.increasePlayers=function(e){var t={confirmed:e.confirmed+1};alert("You have been confirmed for the event. Please do not confirm more than once."),fetch("https://pickupbackend.herokuapp.com/api/v1/organized_games/"+e.id,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(t){return a.setState({displayBasketballGames:a.state.displayBasketballGames.map(function(t){return t.id===e.id?Object(i.a)({},t,{confirmed:t.confirmed+1}):t}),displayBaseballGames:a.state.displayBaseballGames.map(function(t){return t.id===e.id?Object(i.a)({},t,{confirmed:t.confirmed+1}):t}),displayGolfGames:a.state.displayGolfGames.map(function(t){return t.id===e.id?Object(i.a)({},t,{confirmed:t.confirmed+1}):t}),displaySoccerGames:a.state.displaySoccerGames.map(function(t){return t.id===e.id?Object(i.a)({},t,{confirmed:t.confirmed+1}):t})})})},a.handleMyUpcomingGames=function(e){console.log("upcoming"),a.setState({showMyUpcomingGames:!0,showHomePage:!1})},a.handleMyCreatedGames=function(e){console.log("created game",e),a.setState({showMyCreatedGames:!0,showHomePage:!1})},a.organizeGame=function(e){a.setState({showCreateForm:!0})},a.showBasketballCards=function(e){a.setState({showBasketballGames:!0})},a.showGolfCards=function(e){a.setState({showGolfGames:!0})},a.showSoccerCards=function(e){a.setState({showSoccerGames:!0})},a.showBaseballCards=function(e){a.setState({showBaseballGames:!0})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getConfirmedGames(),this.handleUpdateFilter()}},{key:"render",value:function(){var e;return e=!1!==this.state.showCreateForm?r.a.createElement(g,{homePageClick:this.homePageClick,createGame:this.createGame}):!1!==this.state.showBasketballGames?r.a.createElement(w,{homePageClick:this.homePageClick,displayBasketballGames:this.state.displayBasketballGames,increasePlayers:this.increasePlayers,filterBasketballCities:this.filterBasketballCities,confirmed:this.state.confirmed,confirmGame:this.confirmGame,buildConfirmGameObject:this.buildConfirmGameObject}):!1!==this.state.showGolfGames?r.a.createElement(B,{homePageClick:this.homePageClick,displayGolfGames:this.state.displayGolfGames,increasePlayers:this.increasePlayers,filterGolfCities:this.filterGolfCities,confirmGame:this.confirmGame,buildConfirmGameObject:this.buildConfirmGameObject}):!1!==this.state.showSoccerGames?r.a.createElement(S,{homePageClick:this.homePageClick,displaySoccerGames:this.state.displaySoccerGames,increasePlayers:this.increasePlayers,filterSoccerCities:this.filterSoccerCities,confirmGame:this.confirmGame,buildConfirmGameObject:this.buildConfirmGameObject}):!1!==this.state.showBaseballGames?r.a.createElement(O,{homePageClick:this.homePageClick,displayBaseballGames:this.state.displayBaseballGames,increasePlayers:this.increasePlayers,filterBaseballCities:this.filterBaseballCities,confirmGame:this.confirmGame,buildConfirmGameObject:this.buildConfirmGameObject}):!1!==this.state.showHomePage?r.a.createElement(y,{organizeGame:this.organizeGame,handleMyCreatedGames:this.handleMyCreatedGames,showBasketballCards:this.showBasketballCards,showGolfCards:this.showGolfCards,showSoccerCards:this.showSoccerCards,showBaseballCards:this.showBaseballCards,handleMyUpcomingGames:this.handleMyUpcomingGames,logMeOut:this.logMeOut,name:this.state.name}):!1!==this.state.showMyCreatedGames?r.a.createElement(P,{user_id:this.state.user_id,allGames:this.state.allGames,homePageClick:this.homePageClick,displayMyCreatedGames:this.state.displayMyCreatedGames,handleDeleteGame:this.handleDeleteGame,removeCreatedGame:this.removeCreatedGame}):!1!==this.state.showMyUpcomingGames?r.a.createElement(N,{user_id:this.state.user_id,homePageClick:this.homePageClick,displayMyConfirmedGames:this.state.displayMyConfirmedGames,handleUnconfirm:this.handleUnconfirm,allConfirmedGames:this.state.allConfirmedGames,removeConfirmedGame:this.removeConfirmedGame}):!1===this.state.loggedIn?r.a.createElement(D,{logMeIn:this.logMeIn}):r.a.createElement(y,{organizeGame:this.organizeGame,handleMyCreatedGames:this.handleMyCreatedGames,showBasketballCards:this.showBasketballCards,showGolfCards:this.showGolfCards,showSoccerCards:this.showSoccerCards,showBaseballCards:this.showBaseballCards,handleMyUpcomingGames:this.handleMyUpcomingGames,logMeOut:this.logMeOut,name:this.state.name}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"PickUp")),e)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(261);s.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[134,1,2]]]);
//# sourceMappingURL=main.32653495.chunk.js.map