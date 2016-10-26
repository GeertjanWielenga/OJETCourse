define(['ojs/ojcore', 'text!./demo-memory-card.html', './demo-memory-card', 'text!./demo-memory-card.json', 'css!./demo-memory-card', 'ojs/ojcomposite'],
  function(oj, view, viewModel, metadata) {
    oj.Composite.register('demo-memory-card', {
      view: {inline: view}, 
      viewModel: {inline: viewModel}, 
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);