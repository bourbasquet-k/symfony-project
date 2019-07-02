<?php
// src/Controller/Accueil.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

class Accueil extends AbstractController
{
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * @Route("/{_locale}",
     * defaults={
     *      "_locale": "fr"
     * },
     * requirements={
     *      "_locale": "fr|en"
     * })
     */
    public function index($_locale): Response
    {
        $number = random_int(0, 100);

        if($_locale === "fr"){
            return $this->render('accueil/fr.html.twig', ['number' => $number]);
        } else if($_locale === "en"){
            return $this->render('accueil/en.html.twig', ['number' => $number]);
        }
    }
}
