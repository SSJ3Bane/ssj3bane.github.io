(function(){
    window.addEventListener('load', function() {
        document.querySelectorAll(".enableImageBtn").forEach((el) => {
            el.addEventListener('click', function() {
                if(!this.classList.contains('active') && this.classList.contains('trigger')) {
                    if(confirm("This may trigger you, do you accept the consequences?")) {
                        document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('enabled');
                        document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('disabled');
                        this.classList.toggle('active');
                    }
                } else {
                    document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('enabled');
                    document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('disabled');
                    this.classList.toggle('active');
                }
            });
        });
    });
})();