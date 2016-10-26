define(['ojs/ojcore', 
    'text!./customer.html', 
    'text!./customer.json', 
    'ojs/ojcomposite'],
  function(oj, view, metadata) {
    oj.Composite.register('customer', {
      view: {inline: view}, 
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);