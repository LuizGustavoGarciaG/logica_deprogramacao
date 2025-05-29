function obterUsuario() {
return prompt(&quot;Digite o usuário:&quot;);
}

function obterSenha() {
return prompt(&quot;Digite a senha:&quot;);
}

function verificarLogin(usuario, senha) {
let usuario1 = &quot;poloralphlauren&quot;;
let senha1 = &quot;1967&quot;;

let usuario2 = &quot;vanityfair&quot;;
let senha2 = &quot;1913&quot;;

let usuario3 = &quot;fendi&quot;;
let senha3 = &quot;1925&quot;;

let usuario4 = &quot;cartier&quot;;
let senha4 = &quot;1847&quot;;

let usuario5 = &quot;maisonvalentino&quot;;
let senha5 = &quot;1959&quot;;

let usuario6 = &quot;dior&quot;;
let senha6 = &quot;1946&quot;;

let usuario7 = &quot;channel&quot;;
let senha7 = &quot;1910&quot;;

let usuario8 = &quot;hermes&quot;;

let senha8 = &quot;1837&quot;;

let usuario9 = &quot;yvessaintlaurent&quot;;
let senha9 = &quot;1961&quot;;

let usuario10 = &quot;vogue&quot;;
let senha10 = &quot;1872&quot;;

if (usuario === usuario1 &amp;&amp; senha === senha1) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario2 &amp;&amp; senha === senha2) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario3 &amp;&amp; senha === senha3) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario4 &amp;&amp; senha === senha4) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario5 &amp;&amp; senha === senha5) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario6 &amp;&amp; senha === senha6) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario7 &amp;&amp; senha === senha7) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario8 &amp;&amp; senha === senha8) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario9 &amp;&amp; senha === senha9) {
console.log(&quot;Login bem-sucedido!&quot;);
} else if (usuario === usuario10 &amp;&amp; senha === senha10) {
console.log(&quot;Login bem-sucedido!&quot;);
} else {
console.log(&quot;Usuário ou senha incorretos.&quot;);
}

}

function iniciarLogin() {
let usuario = obterUsuario();
let senha = obterSenha();
verificarLogin(usuario, senha);
}

iniciarLogin();