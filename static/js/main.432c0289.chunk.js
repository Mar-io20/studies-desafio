(this["webpackJsonpstudies-desafio"]=this["webpackJsonpstudies-desafio"]||[]).push([[0],[,,,function(e,t,a){e.exports={relogioNumero:"Relogio_relogioNumero__3Tzz4",relogioDivisao:"Relogio_relogioDivisao__fwDbi"}},,,,,function(e,t,a){e.exports={listaTarefas:"Lista_listaTarefas__vhUoa",item:"Lista_item__1wv3Q",itemSelecionado:"Lista_itemSelecionado__2HNvw",itemCompletado:"Lista_itemCompletado__2O28S",concluido:"Lista_concluido__3Q9jW"}},,,function(e,t,a){e.exports={cronometro:"Cronometro_cronometro__3iHsq",relogioWrapper:"Cronometro_relogioWrapper__3sY7m",titulo:"Cronometro_titulo__1o8CV"}},function(e,t,a){e.exports={novaTarefa:"Formulario_novaTarefa__Dzuia",inputContainer:"Formulario_inputContainer__3Y4tm"}},,,function(e,t,a){e.exports={botao:"Botao_botao__1Ir4S"}},function(e,t,a){e.exports={AppStyle:"App_AppStyle__2uTGz"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(14),i=a.n(n),s=(a(23),a(17)),c=a(6),l=a(7),u=a(10),j=a(9),p=a(15),m=a.n(p),d=a(0),b=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.type,t=void 0===e?"button":e;return Object(d.jsx)("button",{type:t,className:m.a.botao,children:this.props.children})}}]),a}(o.a.Component),h=b,O=a(3),f=a.n(O);function _(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(d.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(d.jsx)("span",{className:f.a.relogioDivisao,children:":"}),Object(d.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(d.jsx)("span",{className:f.a.relogioNumero,children:"0"})]})}var x=a(11),v=a.n(x);function N(){return Object(d.jsxs)("div",{className:v.a.cronometro,children:[Object(d.jsx)("p",{className:v.a.titulo,children:"Escolha um card e inicie o cron\xf4metro"}),Object(d.jsx)("div",{className:v.a.relogioWrapper,children:Object(d.jsx)(_,{})}),Object(d.jsx)(h,{children:"Come\xe7ar!"})]})}var g=a(2),y=a(18),C=a(12),T=a.n(C),S=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={tarefa:"",tempo:"00:00"},e}return Object(l.a)(a,[{key:"adicionarTarefa",value:function(e){var t=this;e.preventDefault(),this.props.setTarefas((function(e){return[].concat(Object(y.a)(e),[Object(g.a)({},t.state)])}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{className:T.a.novaTarefa,onSubmit:this.adicionarTarefa.bind(this),children:[Object(d.jsxs)("div",{className:T.a.inputContainer,children:[Object(d.jsx)("label",{htmlFor:"tarefa",children:"Adicione um novo estudo"}),Object(d.jsx)("input",{type:"text",name:"tarefa",id:"tarefa",value:this.state.tarefa,onChange:function(t){return e.setState(Object(g.a)(Object(g.a)({},e.state),{},{tarefa:t.target.value}))},placeholder:"O que voc\xea quer estudar",required:!0})]}),Object(d.jsxs)("div",{className:T.a.inputContainer,children:[Object(d.jsx)("label",{htmlFor:"tempo",children:"Tempo"}),Object(d.jsx)("input",{type:"time",step:"1",name:"tempo",value:this.state.tempo,onChange:function(t){return e.setState(Object(g.a)(Object(g.a)({},e.state),{},{tempo:t.target.value}))},id:"tempo",min:"00:00:00",max:"01:30:00",required:!0})]}),Object(d.jsx)(h,{type:"submit",children:"Adicionar"})]})}}]),a}(o.a.Component),A=S,w=a(8),D=a.n(w);function k(e){var t=e.tarefa,a=e.tempo;return Object(d.jsxs)("li",{className:D.a.item,children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("span",{children:a})]})}var q=function(e){var t=e.tarefas;return Object(d.jsxs)("aside",{className:D.a.listaTarefas,children:[Object(d.jsx)("h2",{children:"Estududos do dia "}),Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)(k,Object(g.a)({},e),t)}))})]})},F=a(16),L=a.n(F);var z=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(d.jsxs)("div",{className:L.a.AppStyle,children:[Object(d.jsx)(A,{setTarefas:o}),Object(d.jsx)(q,{tarefas:a}),Object(d.jsx)(N,{})]})};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.432c0289.chunk.js.map