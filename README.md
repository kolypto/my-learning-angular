Initialize
==========

```console
$ sudo npm install -g @angular/cli
$ ng new my-app
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS
$ cd my-app
$ ng serve --open
```

Generate
========

Component
---------

By default, the Angular CLI command ng generate component generates components with a template file. You can override that by adding the "-t" (short for inlineTemplate=true) option:

```console
$ ng generate component --skip-tests -st hero/name
```

Directive
---------

```console
$ ng generate directive highlight
```

Service
-------

```console
$ ng generate service User
```


Module
------

```console
$ ng generate module CustomerDashboard
$ ng generate module hero-demo --route heroes --module app.module

$ ng generate component customer-dashboard/CustomerDashboard
```


Serve
=====

```console
$ ng serve
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ *
```
