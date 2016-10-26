define(['ojs/ojcore', 'text!./demo-memory-game.html', './demo-memory-game', 'text!./demo-memory-game.json', 
  'css!./demo-memory-game', 'ojs/ojcomposite', 'jet-composites/demo-memory-card/loader'],
  function(oj, view, viewModel, metadata) {
    oj.Composite.register('demo-memory-game', {
      view: {inline: view}, 
      viewModel: {inline: viewModel},  
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);