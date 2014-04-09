Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <button id=\"logout-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Logout</button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "userId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"container\">\n  <div id=\"goalkeeper-circle\">\n      <center id=\"title-logo\">Goalkeeper</center>\n  </div>\n  <div id=\"pic-circle\"></div>\n</div>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"goalkeeper-circle-index\">\n  <center id=\"title\">Goalkeeper</center>\n</div>\n\n<p class=\"text\" id=\"goal1\">Play more</p>\n<p class=\"text\" id=\"goal2\">Travel more</p>\n<p class=\"text\" id=\"goal3\">Run more</p>\n<p class=\"text\" id=\"goal4\">Laugh more</p>\n\n<button class=\"btn btn-default\" id=\"get-started-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "go_login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Get Started</button>\n\n<img class=\"pic\" id=\"pic1\" src=\"public/images/friends2.jpg\" />\n<img class=\"pic\" id=\"pic2\" src=\"public/images/couple-travel.jpg\" />\n<img class=\"pic\" id=\"pic3\" src=\"public/images/woman-running.jpeg\" />\n<img class=\"pic\" id=\"pic4\" src=\"public/images/man-laughing.jpg\" />\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("No account&#63; Signup");
  }

  data.buffer.push("<div class=\"container\">\n  <div id=\"goalkeeper-circle-login\">\n    <center id=\"title-login\">Goalkeeper</center>\n  </div>\n\n  <div class=\"panel-group\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Log In</h4>\n      </div>\n        <div class=\"panel-body\">\n          <form class=\"form-signin\" role=\"form\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'id': ("email"),
    'class': ("form-control input-topper"),
    'placeholder': ("Email address"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'id': ("password"),
    'class': ("form-control input-topper"),
    'placeholder': ("Password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            <button class=\"btn btn-lg btn-primary btn-block\" id=\"login-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Let&#39;s Go!</button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("signUp")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </form>\n        </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["profile/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Profile Edit</h1>\n<label>First Name</label>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("first_name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<label>Last Name</label>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("last_name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["profile/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Edit Profile");
  }

  data.buffer.push("<h1>Profile View</h1>\n<ul>\n  <li>First Name: ");
  stack1 = helpers._triageMustache.call(depth0, "first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n  <li>Last Name: ");
  stack1 = helpers._triageMustache.call(depth0, "last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ul>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profile.edit", options) : helperMissing.call(depth0, "link-to", "profile.edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["runTarget"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <li class='list-group-item'>\n  I ran: ");
  stack1 = helpers._triageMustache.call(depth0, "runEvent.distance", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" miles<br>\n  On: ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "runEvent.date", options) : helperMissing.call(depth0, "formatDate", "runEvent.date", options))));
  data.buffer.push("<br>\n  ");
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "runEvent.time", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  In: ");
  stack1 = helpers['if'].call(depth0, "runEvent.time.hours", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "runEvent.time.minutes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" minutes\n  </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "runEvent.time.hours", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Hours and\n      ");
  return buffer;
  }

  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n<p>");
  stack1 = helpers._triageMustache.call(depth0, "total_miles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" miles</p>\n<ol class='list-group'>\n  ");
  stack1 = helpers.each.call(depth0, "runEvent", "in", "runEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ol>\n<h2>Create a new Running Event!</h2>\n<label>How far you ran: </label>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'value': ("distance")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<br>\n<label>On what day:</label>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("date"),
    'value': ("date")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<br>\n<label>How long you ran for: </label>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'value': ("time")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<br>\n<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEvent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> Save this Run </button>\n");
  return buffer;
  
});

Ember.TEMPLATES["signup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Already registered&#63; Login");
  }

  data.buffer.push("<div class=\"container\">\n  <div id=\"goalkeeper-circle-login\">\n    <center id=\"title-login\">Goalkeeper</center>\n  </div>\n\n  <div class=\"panel-group\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Signup</h4>\n      </div>\n        <div class=\"panel-body\">\n          <form class=\"form-signup\" role=\"form\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("first_name"),
    'class': ("form-control input-topper"),
    'placeholder': ("First name"),
    'value': ("first_name")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("last_name"),
    'class': ("form-control input-topper"),
    'placeholder': ("Last name"),
    'value': ("last_name")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'id': ("email"),
    'class': ("form-control input-topper"),
    'placeholder': ("Email address"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'id': ("password"),
    'class': ("form-control input-topper"),
    'placeholder': ("Password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'id': ("password2"),
    'class': ("form-control input-topper"),
    'placeholder': ("Re-type Password"),
    'value': ("password2")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            <button class=\"btn btn-lg btn-primary btn-block\" id=\"login-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Let&#39;s Go!</button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("signUp")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </form>\n        </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["targets"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["targets/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<div id=\"goalkeeper-circle\">\n  <center id=\"title-logo\">Goalkeeper</center>\n</div>");
  }

  data.buffer.push("<img id=\"background-create-goals\" src=\"public/images/frame-by-frame.jpg\">\n\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<form class=\"form-inline\" id=\"form-create-goals\" role=\"form\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name"),
    'placeholder': ("Name your target"),
    'class': ("form-control"),
    'id': ("target-name-create")
  },hashTypes:{'value': "ID",'placeholder': "STRING",'class': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'class': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  <br>\n  <label class='align-labels'>I am going to</label>\n  <select class=\"form-control\" id=\"pick-goal\">\n    <option>play more</option>\n    <option>read more</option>\n    <option>run more</option>\n    <option>travel more</option>\n  </select>\n  <br>\n  <label class=\"align-labels\">Starting on</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("date"),
    'value': ("start_date"),
    'id': ("start-date")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  <div class=\"goal-steps\">\n    <label class='align-labels'>For the next</label> \n    <input type=\"number\" class='form-control' id='target-duration' placeholder='#'>\n    <select class='form-control' id='time-unit'>\n      <option>days</option>\n      <option>weeks</option>\n      <option>months</option>\n      <option>years</option>\n    </select>\n    \n    <label>I will run a total of </label>\n    <input type='text' class='form-control' id='total-distance' placeholder='#'>\n    <select class='form-control' id='distance-unit'>\n      <option>miles</option>\n      <option>kilometers</option>\n    </select>\n    <label>and I will run...</label>\n    <br>\n    <label class=\"align-labels\">At least </label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'class': ("form-control"),
    'id': ("frequency"),
    'placeholder': ("#")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label>times every</label>\n    <select class='form-control' id='frequency-unit'>\n      <option>week</option>\n      <option>month</option>\n    </select>\n    <label>.</label>\n\n    <button type='button' class='btn btn-primary' id='go-to-run-goal-button' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createTarget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Go!</button>\n  </div>\n</form>\n");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>");
  stack1 = helpers._triageMustache.call(depth0, "first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <h2>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "", options) : helperMissing.call(depth0, "link-to", "user", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});