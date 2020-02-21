(function(){
    window.addEventListener('load', function() {
        document.querySelectorAll(".enableImageBtn").forEach((el) => {
            el.addEventListener('click', function() {
                document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('enabled');
                document.querySelector(`.${this.classList[0]}.apl`).classList.toggle('disabled');
                this.classList.toggle('active');
            });
        });
    });
})();