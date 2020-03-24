import React, { Component } from "react";
import PropTypes from "prop-types";
import Truncate from "react-truncate";
import { Typography, Box } from "@material-ui/core";

class ShowMoreText extends Component {
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
    const { children, more, less, lines, styles, className } = this.props;

    const { expanded, truncated } = this.state;
    console.log(styles);
    return (
      <Box component="div" className={className}>
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
          <Typography className={className}>{children}</Typography>
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

ShowMoreText.defaultProps = {
  lines: 4,
  more: "Read more",
  less: "Show less"
};

ShowMoreText.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string,
  styles: PropTypes.any,
  className: PropTypes.any
};

export default ShowMoreText;
