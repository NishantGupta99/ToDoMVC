import Component from '@glimmer/component';
import { inject as service} from '@ember/service'

export default class TodoComponent extends Component {
    @service('todo-data') todos;
}
