define(['ojs/ojcore', 
    'text!./demo-card.html', 
    './demo-card', 
    'text!./demo-card.json', 
    'css!./demo-card', 
    'ojs/ojcomposite'],
  function(oj, view, viewModel, metadata) {
    oj.Composite.register('demo-card', {
      view: {inline: view}, 
      viewModel: {inline: viewModel}, 
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);