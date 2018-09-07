import React, { Component } from "react";
import { Topics } from "../../components";

class TopicsView extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <a
            href="/compose?cid=2"
            component="category/post"
            id="new_topic"
            className="btn btn-primary"
            data-ajaxify="false"
            role="button"
          >
            New Topic
          </a>

          <span className="float-right" component="category/controls">
            <div
              className="btn-group topic-watch-dropdown bottom-sheet"
              component="topic/watch"
            >
              <button
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                type="button"
              >
                <span component="category/watching/menu">
                  <i className="fa fa-fw fa-eye" />
                  <span className="visible-sm-inline visible-md-inline visible-lg-inline">
                    Watching
                  </span>
                </span>

                <span component="category/ignoring/menu" className="hidden">
                  <i className="fa fa-fw fa-eye-slash" />
                  <span className="visible-sm-inline visible-md-inline visible-lg-inline">
                    Ignoring
                  </span>
                </span>

                <span className="caret" />
              </button>

              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a href="#" component="category/watching">
                    <i
                      component="category/watching/check"
                      className="fa fa-fw fa-check"
                    />
                    <i className="fa fa-fw fa-eye" /> Watching
                    <p className="help-text">
                      <small>Show topics in unread</small>
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" component="category/ignoring">
                    <i
                      component="category/ignoring/check"
                      className="fa fa-fw "
                    />
                    <i className="fa fa-fw fa-eye-slash" /> Ignoring
                    <p className="help-text">
                      <small>Do not show topics in unread</small>
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group bottom-sheet" component="thread/sort">
              <button
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                type="button"
              >
                <span className="visible-sm-inline visible-md-inline visible-lg-inline">
                  Sort by
                </span>
                <span className="visible-xs-inline">
                  <i className="fa fa-fw fa-sort" />
                </span>
                <span className="caret" />
              </button>

              <ul className="dropdown-menu pull-right">
                <li>
                  <a
                    href="#"
                    className="newest_to_oldest"
                    data-sort="newest_to_oldest"
                  >
                    <i className="fa fa-fw fa-check" /> Newest to Oldest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="oldest_to_newest"
                    data-sort="oldest_to_newest"
                  >
                    <i className="fa fa-fw" /> Oldest to Newest
                  </a>
                </li>
                <li>
                  <a href="#" className="most_posts" data-sort="most_posts">
                    <i className="fa fa-fw" /> Most Posts
                  </a>
                </li>
                <li>
                  <a href="#" className="most_votes" data-sort="most_votes">
                    <i className="fa fa-fw" /> Most Votes
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group thread-tools bottom-sheet">
              <button
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                type="button"
                aria-expanded="false"
              >
                <span className="visible-sm-inline visible-md-inline visible-lg-inline">
                  Topic Tools
                </span>
                <span className="visible-xs-inline">
                  <i className="fa fa-fw fa-gear" />
                </span>
                <span className="caret" />
              </button>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a component="topic/mark-unread-for-all" href="#">
                    <i className="fa fa-fw fa-inbox" /> Mark Unread For All
                  </a>
                </li>
                <li>
                  <a component="topic/pin" href="#">
                    <i className="fa fa-fw fa-thumb-tack" /> Pin Topic
                  </a>
                </li>
                <li>
                  <a component="topic/unpin" href="#" className="hidden">
                    <i className="fa fa-fw fa-thumb-tack fa-rotate-90" /> Unpin
                    Topic
                  </a>
                </li>

                <li>
                  <a component="topic/lock" href="#">
                    <i className="fa fa-fw fa-lock" /> Lock Topic
                  </a>
                </li>
                <li>
                  <a component="topic/unlock" href="#" className="hidden">
                    <i className="fa fa-fw fa-unlock" /> Unlock Topic
                  </a>
                </li>

                <li className="divider" />

                <li>
                  <a component="topic/move" href="#">
                    <i className="fa fa-fw fa-arrows" /> Move Topic
                  </a>
                </li>
                <li>
                  <a component="topic/move-all" href="#">
                    <i className="fa fa-fw fa-arrows" /> Move All
                  </a>
                </li>
                <li>
                  <a component="topic/merge" href="#">
                    <i className="fa fa-fw fa-code-fork" /> Merge
                  </a>
                </li>

                <li className="divider" />

                <li>
                  <a component="topic/delete" href="#">
                    <i className="fa fa-fw fa-trash-o" /> Delete Topic
                  </a>
                </li>
                <li>
                  <a component="topic/restore" href="#" className="hidden">
                    <i className="fa fa-fw fa-history" /> Restore Topic
                  </a>
                </li>
                <li>
                  <a component="topic/purge" href="#" className="">
                    <i className="fa fa-fw fa-eraser" /> Purge Topic
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>

        <Topics />
      </div>
    );
  }
}

export default TopicsView;
