(this["webpackJsonpstudies-desafio"]=this["webpackJsonpstudies-desafio"]||[]).push([[0],[,,,function(e,t,a){e.exports={relogioNumero:"Relogio_relogioNumero__3Tzz4",relogioDivisao:"Relogio_relogioDivisao__fwDbi"}},,,,,function(e,t,a){e.exports={listaTarefas:"Lista_listaTarefas__vhUoa",item:"Lista_item__1wv3Q",itemSelecionado:"Lista_itemSelecionado__2HNvw",itemCompletado:"Lista_itemCompletado__2O28S",concluido:"Lista_concluido__3Q9jW"}},,,function(e,t,a){e.exports={cronometro:"Cronometro_cronometro__3iHsq",relogioWrapper:"Cronometro_relogioWrapper__3sY7m",titulo:"Cronometro_titulo__1o8CV"}},function(e,t,a){e.exports={novaTarefa:"Formulario_novaTarefa__Dzuia",inputContainer:"Formulario_inputContainer__3Y4tm"}},,,function(e,t,a){e.exports={botao:"Botao_botao__1Ir4S"}},function(e,t,a){e.exports={AppStyle:"App_AppStyle__2uTGz"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),n=a(14),i=a.n(n),s=(a(23),a(17)),c=a(6),l=a(7),u=a(10),j=a(9),d=a(15),m=a.n(d),p=a(0),b=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.type,t=void 0===e?"button":e;return Object(p.jsx)("button",{type:t,className:m.a.botao,children:this.props.children})}}]),a}(r.a.Component),O=b,h=a(3),f=a.n(h);function _(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(p.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(p.jsx)("span",{className:f.a.relogioDivisao,children:":"}),Object(p.jsx)("span",{className:f.a.relogioNumero,children:"0"}),Object(p.jsx)("span",{className:f.a.relogioNumero,children:"0"})]})}var x=a(11),v=a.n(x);function g(){return Object(p.jsxs)("div",{className:v.a.cronometro,children:[Object(p.jsx)("p",{className:v.a.titulo,children:"Escolha um card e inicie o cron\xf4metro"}),Object(p.jsx)("div",{className:v.a.relogioWrapper,children:Object(p.jsx)(_,{})}),Object(p.jsx)(O,{children:"Come\xe7ar!"})]})}var N=a(2),y=a(18),C=a(12),S=a.n(C),T=a(27),A=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={tarefa:"",tempo:"00:00"},e}return Object(l.a)(a,[{key:"adicionarTarefa",value:function(e){var t=this;e.preventDefault(),this.props.setTarefas((function(e){return[].concat(Object(y.a)(e),[Object(N.a)(Object(N.a)({},t.state),{},{selecionado:!1,completado:!1,id:Object(T.a)()})])})),this.setState({tarefa:"",tempo:"00:00"})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("form",{className:S.a.novaTarefa,onSubmit:this.adicionarTarefa.bind(this),children:[Object(p.jsxs)("div",{className:S.a.inputContainer,children:[Object(p.jsx)("label",{htmlFor:"tarefa",children:"Adicione um novo estudo"}),Object(p.jsx)("input",{type:"text",name:"tarefa",id:"tarefa",value:this.state.tarefa,onChange:function(t){return e.setState(Object(N.a)(Object(N.a)({},e.state),{},{tarefa:t.target.value}))},placeholder:"O que voc\xea quer estudar",required:!0})]}),Object(p.jsxs)("div",{className:S.a.inputContainer,children:[Object(p.jsx)("label",{htmlFor:"tempo",children:"Tempo"}),Object(p.jsx)("input",{type:"time",step:"1",name:"tempo",value:this.state.tempo,onChange:function(t){return e.setState(Object(N.a)(Object(N.a)({},e.state),{},{tempo:t.target.value}))},id:"tempo",min:"00:00:00",max:"01:30:00",required:!0})]}),Object(p.jsx)(O,{type:"submit",children:"Adicionar"})]})}}]),a}(r.a.Component),w=A,D=a(8),k=a.n(D);function q(e){var t=e.tarefa,a=e.tempo,o=e.selecionado,r=e.completado,n=e.id;return console.log("item atual: ",{tarefa:t,tempo:a,selecionado:o,completado:r,id:n}),Object(p.jsxs)("li",{className:k.a.item,children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("span",{children:a})]})}var F=function(e){var t=e.tarefas;return Object(p.jsxs)("aside",{className:k.a.listaTarefas,children:[Object(p.jsx)("h2",{children:"Estududos do dia "}),Object(p.jsx)("ul",{children:t.map((function(e,t){return Object(p.jsx)(q,Object(N.a)({},e),t)}))})]})},L=a(16),z=a.n(L);var W=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(p.jsxs)("div",{className:z.a.AppStyle,children:[Object(p.jsx)(w,{setTarefas:r}),Object(p.jsx)(F,{tarefas:a}),Object(p.jsx)(g,{})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3accd7ff.chunk.js.map