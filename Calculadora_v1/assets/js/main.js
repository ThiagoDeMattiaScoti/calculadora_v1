function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaTecla();
        this.display.focus();
    }

    this.capturaTecla = () => {
        document.addEventListener('keyup', e =>{
            if (e.keyCode === 13) this.eqNumDisp();
        })
    }

    this.capturaCliques = () =>{
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-enum')) this.addNumDisp(el);
            if (el.classList.contains('btn-clear')) this.clearDisp();
            if (el.classList.contains('btn-del')) this.delNumDisp(el);
            if (el.classList.contains('btn-eq')) this.eqNumDisp(el);
        })
    }

    this.addNumDisp = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisp = () => this.display.value = '';
    this.delNumDisp = () => this.display.value = this.display.value.slice(0, -1);
    this.eqNumDisp = () => {
        try{
            const conta = eval(this.display.value)
            if (!conta){
                alert('Conta inválida')
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();