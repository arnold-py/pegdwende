window.onload = addHeader(), addFooter();


function addHeader(){
    const menuCode = `
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
    </div>
    <!-- Spinner End -->

 <!-- Navbar Start -->
 <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
    <a href="index.html" class="navbar-brand d-flex align-items-center">
        <h2 class="m-0 text-primary"><img class="img-fluid me-2" src="img/icon-1.png" alt="" style="width: 45px;">PEGDWENDE ECHANGE</h2>
    </a>
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-4 py-lg-0">
            <a href="index.html" class="nav-item nav-link ">Acceuil</a>
            <a href="service.html" class="nav-item nav-link"> Nos Service</a>
            <a href="about.html" class="nav-item nav-link">A propos</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Plus</a>
                <div class="dropdown-menu shadow-sm m-0">
                    <a href="faq.html" class="dropdown-item">FAQs</a>
                    <a href="contact.html" class="dropdown-item">Contact</a>
                </div>
            </div>
            <a href="connexion.html" class="nav-item nav-link">Connexion</a>
         <a href="inscription.html" class="nav-item nav-link">Inscription</a>
        </div>
    </div>
</nav>
<!-- Navbar End -->
    `;

    const target = document.querySelector(".panelPlace");
    target.innerHTML = menuCode;
}


function addFooter(){
    const menuCode = `
    <!-- Footer Start -->
    <div class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6">
                    <h1 class="text-primary mb-4"><img class="img-fluid me-2" src="img/icon-1.png" alt="" style="width: 45px;"> PEGDWENDE ECHANGE</h1>
                </div>
                <div class="col-md-6">
                    <h5 class="mb-4">Newsletter</h5>
                    <div class="position-relative">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Votre email">
                        <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Entrer en contact</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>Koupela,secteur 4, Burkina Faso</p>
                    <p><i class="fa fa-phone-alt me-3"></i>+226 76759836</p>
                    <p><i class="fa fa-envelope me-3"></i>pegdwendeechange@gmail.com</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Nos services</h5>
                    <a class="btn btn-link" href="">Portefeuille</a>
                    <a class="btn btn-link" href="">Transaction</a>
                    <a class="btn btn-link" href="">Investissement</a>
                    <a class="btn btn-link" href="">Vente de crypto</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Liens rapides</h5>
                    <a class="btn btn-link" href="about.html">A propos de nous</a>
                    <a class="btn btn-link" href="contact.html">Contact </a>
                    <a class="btn btn-link" href="service.html">Nos services</a>
                    <a class="btn btn-link" href="condition.html">Termes & conditions</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Suivez nous</h5>
                    <a class="btn btn-link" href="https://www.facebook.com/profile.php?id=61550774072019">Facebook</a>
                    <a class="btn btn-link" href="tiktok.com/@leloupduforex">Tiktok</a>
                    <a class="btn btn-link" href="https://instagram.com/pegdwendeall?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a>
        
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">PEGDWENDE ECHANGE</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a href="#">Nexus technologies</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
    `;

    const target = document.querySelector(".footerPlace");
    target.innerHTML = menuCode;
}