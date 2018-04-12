import React,{Component} from 'react'

export default  class Error extends Component {

  render() {
        return (
            <div class="container-fluid">
                <div class="content-heading clearfix">
                    <div class="heading-left">
                        <h1 class="page-title">Test Submit</h1>
                        <p class="page-subtitle">create / update / delete</p>
                    </div>
                    <ul class="breadcrumb">
                        <li><a href=""><i class="fa fa-home"></i> Home</a></li>
                        <li class="active">Test Submit </li> 
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Test Submit</h3>
                                </div>
                                <div class="panel-body">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

