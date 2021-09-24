import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <title>ThewayShop - Ecommerce </title>
                    <meta name="keywords" content="" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />

                    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />

                    <link rel="stylesheet" href="css/bootstrap.min.css" />
                    <link rel="stylesheet" href="css/style.css" />
                    <link rel="stylesheet" href="css/responsive.css" />
                    <link rel="stylesheet" href="css/custom.css" />

                    <script defer src="js/jquery-3.2.1.min.js"></script>
                    <script defer src="js/popper.min.js"></script>
                    <script defer src="js/bootstrap.min.js"></script>
                    <script defer src="js/jquery.superslides.min.js"></script>
                    <script defer src="js/bootstrap-select.js"></script>
                    <script defer src="js/inewsticker.js"></script>
                    <script defer src="js/bootsnav.js."></script>
                    <script defer src="js/images-loded.min.js"></script>
                    <script defer src="js/isotope.min.js"></script>
                    <script defer src="js/owl.carousel.min.js"></script>
                    <script defer src="js/baguetteBox.min.js"></script>
                    <script defer src="js/form-validator.min.js"></script>
                    <script defer src="js/contact-form-script.js"></script>
                    <script defer src="js/custom.js"></script>
                </Head>
                <body>
                    <Main />
                    {/* <script dangerouslySetInnerHTML={{ __html: getUserProfile(user) }} /> */}
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument