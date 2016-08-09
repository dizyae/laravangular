<!DOCTYPE html>
<html lang="en" ng-app="appBase">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Webroot Base</title>

        <base href="/">
        <!-- Bootstrap -->
        <link href="<?= asset('lib/bootstrap-theme.min.css') ?>" rel="stylesheet">
        <link href="<?= asset('lib/bootstrap.min.css" rel="stylesheet') ?>">

        <!--Application CSS-->
        <link href="<?= asset('css/application.css') ?>" rel="stylesheet">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js') ?>"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js') ?>"></script>
        <![endif]-->
        <script src="<?= asset('lib/angular.min.js') ?>"></script>
        <script src="<?= asset('lib/angular-ui-router.min.js') ?>"></script>
        <script src="<?= asset('lib/angular-animate.min.js') ?>"></script>
        <script src="<?= asset('lib/angular-touch.min.js') ?>"></script>
        <script src="<?= asset('lib/angular-cookies.min.js') ?>"></script>
        <script src="<?= asset('lib/angular-storage.min.js') ?>"></script>
    </head>
    <body>

        <div ui-view></div>

        <!-- Load additional asset files -->
        <script src="<?= asset('lib/ui-bootstrap-1.3.1.min.js') ?>"></script>

        <!-- Load module files first -->
        <script src="<?= asset('app/app.module.js') ?>"></script>
        <script src="<?= asset('app/widgets/widgets.module.js') ?>"></script>
        <script src="<?= asset('app/core/core.module.js') ?>"></script>
        <script src="<?= asset('app/admin/admin.module.js') ?>"></script>
        <script src="<?= asset('app/layout/layout.module.js') ?>"></script>
        <script src="<?= asset('app/shared/auth/auth.module.js') ?>"></script>
        <script src="<?= asset('app/shared/logger/logger.module.js') ?>"></script>
        <script src="<?= asset('app/shared/router/router.module.js') ?>"></script>
        <script src="<?= asset('app/shared/shared.module.js') ?>"></script>
        <script src="<?= asset('app/users/users.module.js') ?>"></script>
        <script src="<?= asset('app/shared/base64/base64.module.js') ?>"></script>

        <!--Then load everything else-->
        <script src="<?= asset('app/widgets/calendar.directive.js') ?>"></script>
        <script src="<?= asset('app/widgets/compare.directive.js') ?>"></script>
        <script src="<?= asset('app/widgets/email.directive.js') ?>"></script>
        <script src="<?= asset('app/widgets/password.directive.js') ?>"></script>
        <script src="<?= asset('app/core/core.config.js') ?>"></script>
        <script src="<?= asset('app/core/core.constants.js') ?>"></script>
        <script src="<?= asset('app/core/core.routes.js') ?>"></script>
        <script src="<?= asset('app/admin/login.controller.js') ?>"></script>
        <script src="<?= asset('app/admin/admin.routes.js') ?>"></script>
        <script src="<?= asset('app/layout/home.controller.js') ?>"></script>
        <script src="<?= asset('app/layout/layout.routes.js') ?>"></script>
        <script src="<?= asset('app/layout/navbar.directive.js') ?>"></script>
        <script src="<?= asset('app/shared/flags.service.js') ?>"></script>
        <script src="<?= asset('app/shared/foobar.service.js') ?>"></script>
        <script src="<?= asset('app/shared/auth/auth.run.js') ?>"></script>
        <script src="<?= asset('app/shared/auth/auth.service.js') ?>"></script>
        <script src="<?= asset('app/shared/auth/session.service.js') ?>"></script>
        <script src="<?= asset('app/shared/logger/logger.service.js') ?>"></script>
        <script src="<?= asset('app/shared/router/router-helper.provider.js') ?>"></script>
        <script src="<?= asset('app/shared/base64/base64-helper.provider.js') ?>"></script>
        <script src="<?= asset('app/users/users.routes.js') ?>"></script>
        <script src="<?= asset('app/users/users.service.js') ?>"></script>
        <script src="<?= asset('app/users/signup.controller.js') ?>"></script>
    </body>
</html>