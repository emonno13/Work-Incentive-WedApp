import React, { Component } from "react";
import PropTypes from "prop-types";
import Truncate from "react-truncate";
import { Typography, Box } from "@material-ui/core";

class ReadMore extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { children, more, less, lines } = this.props;

    const { expanded, truncated } = this.state;

    return (
      <Box component="div">
        <Truncate
          lines={!expanded && lines}
          ellipsis={
            <Box component="span">
              ...
              <Box
                component="a"
                href="#"
                onClick={this.toggleLines}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#25828b"
                  }}
                >
                  {more}
                </Typography>
              </Box>
            </Box>
          }
          onTruncate={this.handleTruncate}
        >
          <Typography>{children}</Typography>
        </Truncate>
        {!truncated && expanded && (
          <Box component="span">
            {" "}
            <Box
              component="a"
              href="#"
              style={{ textDecoration: "none" }}
              onClick={this.toggleLines}
            >
              <Typography style={{ fontSize: 15, color: "#25828b" }}>
                {less}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}

ReadMore.defaultProps = {
  lines: 4,
  more: "Read more",
  less: "Show less"
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string
};

export default ReadMore;
