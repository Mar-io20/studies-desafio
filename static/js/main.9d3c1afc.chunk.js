(this["webpackJsonpstudies-desafio"]=this["webpackJsonpstudies-desafio"]||[]).push([[0],[,,,,function(e,t,a){e.exports={relogioNumero:"Relogio_relogioNumero__3Tzz4",relogioDivisao:"Relogio_relogioDivisao__fwDbi"}},,,,,,,function(e,t,a){e.exports={cronometro:"Cronometro_cronometro__3iHsq",relogioWrapper:"Cronometro_relogioWrapper__3sY7m",titulo:"Cronometro_titulo__1o8CV"}},function(e,t,a){e.exports={novaTarefa:"Formulario_novaTarefa__Dzuia",inputContainer:"Formulario_inputContainer__3Y4tm"}},,function(e,t,a){e.exports={item:"Item_item__2P3az",itemSelecionado:"Item_itemSelecionado__3jCs2",itemCompletado:"Item_itemCompletado__16K-n",concluido:"Item_concluido__cEont"}},,function(e,t,a){e.exports={botao:"Botao_botao__1Ir4S"}},function(e,t,a){e.exports={listaTarefas:"Lista_listaTarefas__vhUoa"}},function(e,t,a){e.exports={AppStyle:"App_AppStyle__2uTGz"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(15),i=a.n(r),c=(a(24),a(2)),s=a(3),l=a(7),u=a(8),j=a(10),d=a(9),m=a(16),p=a.n(m),b=a(0),f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.type,t=void 0===e?"button":e;return Object(b.jsx)("button",{type:t,className:p.a.botao,children:this.props.children})}}]),a}(n.a.Component),O=f,h=a(4),v=a.n(h);function x(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:v.a.relogioNumero,children:"0"}),Object(b.jsx)("span",{className:v.a.relogioNumero,children:"0"}),Object(b.jsx)("span",{className:v.a.relogioDivisao,children:":"}),Object(b.jsx)("span",{className:v.a.relogioNumero,children:"0"}),Object(b.jsx)("span",{className:v.a.relogioNumero,children:"0"})]})}var _=a(11),N=a.n(_);function g(e){var t=e.selecionado,a=Object(o.useState)(function(e){var t=e.split(":"),a=Object(s.a)(t,3),o=a[0],n=void 0===o?"0":o,r=a[1],i=void 0===r?"0":r,c=a[2],l=void 0===c?"0":c;return 3600*Number(n)+60*Number(i)+Number(l)}(String(null===t||void 0===t?void 0:t.tempo))),n=Object(s.a)(a,2),r=n[0];n[1];return Object(b.jsxs)("div",{className:N.a.cronometro,children:[Object(b.jsx)("p",{className:N.a.titulo,children:"Escolha um card e inicie o cron\xf4metro"}),"Tempo: ",r,Object(b.jsx)("div",{className:N.a.relogioWrapper,children:Object(b.jsx)(x,{})}),Object(b.jsx)(O,{children:"Come\xe7ar!"})]})}var T=a(19),C=a(12),S=a.n(C),y=a(28),A=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tarefa:"",tempo:"00:00"},e}return Object(u.a)(a,[{key:"adicionarTarefa",value:function(e){var t=this;e.preventDefault(),this.props.setTarefas((function(e){return[].concat(Object(T.a)(e),[Object(c.a)(Object(c.a)({},t.state),{},{selecionado:!1,completado:!1,id:Object(y.a)()})])})),this.setState({tarefa:"",tempo:"00:00"})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{className:S.a.novaTarefa,onSubmit:this.adicionarTarefa.bind(this),children:[Object(b.jsxs)("div",{className:S.a.inputContainer,children:[Object(b.jsx)("label",{htmlFor:"tarefa",children:"Adicione um novo estudo"}),Object(b.jsx)("input",{type:"text",name:"tarefa",id:"tarefa",value:this.state.tarefa,onChange:function(t){return e.setState(Object(c.a)(Object(c.a)({},e.state),{},{tarefa:t.target.value}))},placeholder:"O que voc\xea quer estudar",required:!0})]}),Object(b.jsxs)("div",{className:S.a.inputContainer,children:[Object(b.jsx)("label",{htmlFor:"tempo",children:"Tempo"}),Object(b.jsx)("input",{type:"time",step:"1",name:"tempo",value:this.state.tempo,onChange:function(t){return e.setState(Object(c.a)(Object(c.a)({},e.state),{},{tempo:t.target.value}))},id:"tempo",min:"00:00:00",max:"01:30:00",required:!0})]}),Object(b.jsx)(O,{type:"submit",children:"Adicionar"})]})}}]),a}(n.a.Component),k=A,D=a(14),I=a.n(D);function q(e){var t=e.tarefa,a=e.tempo,o=e.selecionado,n=e.completado,r=e.id,i=e.selecionaTarefa;return Object(b.jsxs)("li",{className:"".concat(I.a.item," ").concat(o?I.a.itemSelecionado:""),onClick:function(){return i({tarefa:t,tempo:a,selecionado:o,completado:n,id:r})},children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("span",{children:a})]})}var z=a(17),F=a.n(z);var w=function(e){var t=e.tarefas,a=e.selecionaTarefa;return Object(b.jsxs)("aside",{className:F.a.listaTarefas,children:[Object(b.jsx)("h2",{children:"Estududos do dia "}),Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(q,Object(c.a)({selecionaTarefa:a},e),e.id)}))})]})},E=a(18),W=a.n(E);var B=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(),i=Object(s.a)(r,2),l=i[0],u=i[1];return Object(b.jsxs)("div",{className:W.a.AppStyle,children:[Object(b.jsx)(k,{setTarefas:n}),Object(b.jsx)(w,{tarefas:a,selecionaTarefa:function(e){u(e),n((function(t){return t.map((function(t){return Object(c.a)(Object(c.a)({},t),{},{selecionado:t.id===e.id})}))}))}}),Object(b.jsx)(g,{selecionado:l})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9d3c1afc.chunk.js.map