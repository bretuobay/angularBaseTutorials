


describe('#Page Title Check', function() {
  it('should have a title', function() {
    browser.get('http://127.0.0.1:8080/');
    expect(browser.getTitle()).toEqual('Learn Angular App');
  });
});



describe('#Nav Element Check', function() {

  it('should have three menu items and menu must match what we have here',function(){

    browser.get('http://127.0.0.1:8080/#/');

    element.all(by.css('.navbar-nav li a')).then(function(items) {
      expect(items.length).toBe(3);
      expect(items[0].getText()).toBe('Register');
      expect(items[1].getText()).toBe('Login');
      expect(items[2].getText()).toBe('Logout');
    });

  });

});
