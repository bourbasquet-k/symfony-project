<?php
// src/Controller/Accueil.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class Accueil extends AbstractController
{
    /**
     * @Route("/{_locale}",
     * defaults={
     *      "_locale": "fr"
     * },
     * requirements={
     *      "_locale": "fr|en"
     * })
     */
    public function number($_locale)
    {
        $number = random_int(0, 100);

        if($_locale === "fr"){
            return $this->render('accueil/fr.php', ['number' => $number]);
        } else if($_locale === "en"){
            return $this->render('accueil/en.php', ['number' => $number]);
        }
    }
}
