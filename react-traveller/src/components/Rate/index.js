import React, { useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";

export default function Rate({ onRouteChange }) {
  return (
    <MDBCol class="col-md-3">
      <MDBRow style={{ padding: "55px" }}>
        <h2>TRIP COMPLETED YAY!</h2>
      </MDBRow>
      <MDBRow>
        <p>
          You just had completed trip <bold>Guacamole 2019!</bold>That was you
          7th trip. Tell other about your experience!
        </p>
      </MDBRow>
      <MDBRow>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Countries visited</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Spain"
            ></input>
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput2">Cities visited</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Madrid"
            ></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Tips for next travelers</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="DOn't forget to use sunscreen daily!"
            ></input>
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput2">
              Main transportation mode you had taken
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Car"
            ></input>
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput2">Total approximate cost</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="$"
            ></input>
          </div>

          <div class="form-group">
            <label for="formGroupExampleInput2">Overall experience</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="It was awesome!"
            ></input>
          </div>
        </form>
      </MDBRow>
      <MDBRow>
        <p>Select all applicable</p>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              good for families
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              good for seniors
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              good for groups
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              religious trip
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              National Park tour
            </label>
          </div>
        </MDBCol>
        <MDBCol>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              active adventure
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              sightseeing
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              driving only
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              log of nature
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              :)
            </label>
          </div>
        </MDBCol>
        <MDBCol>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              guided tours
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              river cruise
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              ship cruise
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              independent vacation
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            ></input>
            <label class="custom-control-label" for="defaultUnchecked">
              themed trip
            </label>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow></MDBRow>
      <MDBRow>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Rate USER_x trip</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="3.5 / 5"
            ></input>
          </div>
        </form>
      </MDBRow>
      <MDBRow>
        <p>Add pictures (optional)</p>

        <div class="file-upload-wrapper">
          <input
            type="file"
            id="input-file-now"
            class="file-upload"
            data-max-file-size="2M"
          />
        </div>
      </MDBRow>
      <MDBRow>
        <button type="button" class="btn btn-primary">
          SAVE
        </button>
        <button type="button" class="btn btn-link">
          leave and finish review later
        </button>
      </MDBRow>
    </MDBCol>
  );
}
