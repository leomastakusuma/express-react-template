import React,{Component} from 'react'

class Error extends Component {
  render() {
        return (
            <form class="form-horizontal" id="form_role" role="form" method="POST" action="/login">
                <fieldset>
                    <div class="form-group">
                        <label for="name" class="col-sm-3 control-label">Title</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control title" value="" id="title"  name="title" placeholder="Title"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="col-sm-3 control-label">Content</label>
                        <div class="col-sm-9">
                            <textarea class="form-control content" name="content" id="content" rows="5" cols="30" placeholder="content"></textarea>
                        </div>
                    </div>                                
                    <div class="form-group">
                        <div class="save-data col-sm-offset-3 col-sm-3">
                            <button type="submit" id="save" class="btn btn-success btn-block">Save</button>
                        </div>
                    </div>
                </fieldset>
            </form>
   
        )
  }
}

