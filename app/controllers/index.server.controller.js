function indexRender(req, res, next) {
   res.render('index', { title: 'Index' });
}  

function projectRender(req, res, next) {
   res.render('project', { title: 'Project' });
   }
function contactRender(req, res, next) {
      res.render('contact', { title: 'Contact' });
   }
function servicesRender(req, res, next) {
      res.render('services', { title: 'Services' });
   }
module.exports = { indexRender, projectRender,contactRender,servicesRender };

