function rand(min, max) {
    return Math.floor(Math.random() * ((max+1) -min) + min);
}

export default function geraSenha(quantidade, check) {
    const minusculo = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '012345678901234567890123456789';
    const especialChar = '!@#$%&*()^~[]{}-=_+?/:;|><£¢§';

    let stringFinal = ''

    if(check.includes('num')) stringFinal += num;
    if(check.includes('maiusculo')) stringFinal += maiusculo;
    if(check.includes('minusculo')) stringFinal += minusculo;
    if(check.includes('especialChar')) stringFinal += especialChar;

    let senha = '';
    let numAleatorio;
    for(let i = 0; i < quantidade; i++) {
        numAleatorio = rand(0, (stringFinal.length -1));
        senha += stringFinal[numAleatorio];
    }

    return senha;
}