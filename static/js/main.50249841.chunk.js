(this.webpackJsonpjest_sample=this.webpackJsonpjest_sample||[]).push([[0],{21:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),u=n.n(r),i=n(4),c=n(5),s=n(7),o=n(6),m=n(2),h=n(8),d=n(9),p=n.n(d),b=n(19),f=n(20),E=n.n(f),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={user:"",url:"",inputName:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.fetchGitHubInfo=n.fetchGitHubInfo.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({inputName:e.target.value})}},{key:"fetchGitHubInfo",value:function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.a.get("https://api.github.com/users/".concat(this.state.inputName));case 3:n=e.sent,this.setState({user:n.data.login}),this.setState({url:n.data.html_url});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Main Page"),l.a.createElement("form",{onSubmit:this.fetchGitHubInfo},l.a.createElement("div",null,l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",placeholder:"Input GitHub Name",value:this.state.inputName,onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Send"))),l.a.createElement("ul",null,l.a.createElement("li",{"data-testid":"name"},this.state.user),l.a.createElement("li",{"data-testid":"url"},this.state.url)))}}]),t}(l.a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleLogin=n.handleLogin.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleLogin",value:function(){var e=document.getElementById("root");u.a.render(l.a.createElement(v,null),e)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Login Page"),l.a.createElement("form",{onSubmit:this.handleLogin},l.a.createElement("div",null,l.a.createElement("label",null,"email:",l.a.createElement("input",{type:"text",placeholder:"Input Your Email Address"}))),l.a.createElement("div",null,l.a.createElement("label",null,"password:",l.a.createElement("input",{type:"password",placeholder:"Password"}))),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Login"))))}}]),t}(l.a.Component),j=document.getElementById("root");u.a.render(l.a.createElement(g,null),j)}},[[21,1,2]]]);
//# sourceMappingURL=main.50249841.chunk.js.map