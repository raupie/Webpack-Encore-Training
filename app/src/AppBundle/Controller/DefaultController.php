<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepageAction(Request $request)
    {
        return $this->render('full/homepage.html.twig');
    }

    /**
     * @Route("/page", name="page")
     */
    public function pageAction(Request $request)
    {
        return $this->render('full/page.html.twig');
    }

    /**
     * @Route("/form", name="form")
     */
    public function formAction(Request $request)
    {
        return $this->render('full/form.html.twig');
    }

    /**
     * @Route("/table", name="table")
     */
    public function tableAction(Request $request)
    {
        return $this->render('full/table.html.twig');
    }
}
