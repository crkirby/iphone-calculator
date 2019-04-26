import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from '../Result/Result'
import mapDispatchToProps from '../../store/actions'
import './Calculator.css';

class Calculator extends Component {
	render() {
		return (
			<div className="Calculator">

				<div className="Calculator-screen">
					<Result output={this.props.result} />
				</div>

				<div className="row">
					<div onClick={this.props.clear} className="options">C</div>
					<div className="options" onClick={this.props.flipSign}>±</div>
					<div className="options" onClick={this.props.percent}>%</div>
					<div className="operators" onClick={this.props.divide}>÷</div>
				</div>

				<div className="row">
					<div className="digits" onClick={() => this.props.buildOperand('7')}>7</div>
					<div className="digits" onClick={() => this.props.buildOperand('8')}>8</div>
					<div className="digits" onClick={() => this.props.buildOperand('9')} >9</div>
					<div className="operators" onClick={this.props.multiply}>x</div>
				</div>

				<div className="row">
					<div className="digits" onClick={() => this.props.buildOperand('4')}>4</div>
					<div className="digits" onClick={() => this.props.buildOperand('5')}>5</div>
					<div className="digits" onClick={() => this.props.buildOperand('6')}>6</div>
					<div className="operators" onClick={this.props.subtract}>-</div>
				</div>

				<div className="row">
					<div className="digits" onClick={() => this.props.buildOperand('1')}>1</div>
					<div className="digits" onClick={() => this.props.buildOperand('2')}>2</div>
					<div className="digits" onClick={() => this.props.buildOperand('3')}>3</div>
					<div className="operators" onClick={this.props.add} >+</div>
				</div>

				<div className="row">
					<div id="zero" className="digits" onClick={() => this.props.buildOperand('0')}>0</div>
					<div id="decimal" className="digits" onClick={() => this.props.buildOperand('.')}>.</div>
					<div id="equal" className="operators" onClick={this.props.solve}>=</div>
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => {
	return { result: state.currentResult }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
