import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: '{{ text | summary }}',
})
export class AppComponent {
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue erat velit, at dignissim libero laoreet at. Fusce sollicitudin suscipit vehicula. Aenean ipsum odio, aliquam et orci vitae, lobortis malesuada leo. Curabitur vestibulum tincidunt tincidunt. Vivamus porta ullamcorper tincidunt. Aenean fermentum elementum erat ultrices scelerisque. Nam vel laoreet diam, et egestas est. Mauris rhoncus est quis arcu scelerisque, quis dictum enim dignissim. Nulla ut nunc risus. Pellentesque blandit erat elit, at ornare arcu congue ac';
}
