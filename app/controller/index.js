const { BaseController } = require('eop');

class IndexController extends BaseController {
	constructor(app) {
		super(app);
	}

	home(ctx) {
		ctx.body = "hello this is index";
	}


}
module.exports = function (app) {
	return new IndexController(app);
};
