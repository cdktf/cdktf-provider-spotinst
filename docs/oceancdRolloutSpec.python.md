# `oceancdRolloutSpec` Submodule <a name="`oceancdRolloutSpec` Submodule" id="@cdktf/provider-spotinst.oceancdRolloutSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdRolloutSpec <a name="OceancdRolloutSpec" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpec(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rollout_spec_name: str,
  strategy: OceancdRolloutSpecStrategy,
  failure_policy: OceancdRolloutSpecFailurePolicy = None,
  id: str = None,
  spot_deployment: OceancdRolloutSpecSpotDeployment = None,
  spot_deployments: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]] = None,
  traffic: OceancdRolloutSpecTraffic = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.rolloutSpecName">rollout_spec_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployment">spot_deployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployments">spot_deployments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]</code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rollout_spec_name`<sup>Required</sup> <a name="rollout_spec_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.rolloutSpecName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.failurePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spot_deployment`<sup>Optional</sup> <a name="spot_deployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployment"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `spot_deployments`<sup>Optional</sup> <a name="spot_deployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.traffic"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy">put_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment">put_spot_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments">put_spot_deployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic">put_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment">reset_spot_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments">reset_spot_deployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic">reset_traffic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_failure_policy` <a name="put_failure_policy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy"></a>

```python
def put_failure_policy(
  action: str
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}.

---

##### `put_spot_deployment` <a name="put_spot_deployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment"></a>

```python
def put_spot_deployment(
  spot_deployment_cluster_id: str = None,
  spot_deployment_name: str = None,
  spot_deployment_namespace: str = None
) -> None
```

###### `spot_deployment_cluster_id`<sup>Optional</sup> <a name="spot_deployment_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.spotDeploymentClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}.

---

###### `spot_deployment_name`<sup>Optional</sup> <a name="spot_deployment_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.spotDeploymentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}.

---

###### `spot_deployment_namespace`<sup>Optional</sup> <a name="spot_deployment_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.spotDeploymentNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}.

---

##### `put_spot_deployments` <a name="put_spot_deployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments"></a>

```python
def put_spot_deployments(
  value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]

---

##### `put_strategy` <a name="put_strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy"></a>

```python
def put_strategy(
  strategy_name: str,
  args: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]] = None
) -> None
```

###### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy.parameter.strategyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}.

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy.parameter.args"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}

---

##### `put_traffic` <a name="put_traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic"></a>

```python
def put_traffic(
  alb: OceancdRolloutSpecTrafficAlb = None,
  ambassador: OceancdRolloutSpecTrafficAmbassador = None,
  canary_service: str = None,
  istio: OceancdRolloutSpecTrafficIstio = None,
  nginx: OceancdRolloutSpecTrafficNginx = None,
  ping_pong: OceancdRolloutSpecTrafficPingPong = None,
  smi: OceancdRolloutSpecTrafficSmi = None,
  stable_service: str = None
) -> None
```

###### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.alb"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}

---

###### `ambassador`<sup>Optional</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.ambassador"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

ambassador block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}

---

###### `canary_service`<sup>Optional</sup> <a name="canary_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.canaryService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}.

---

###### `istio`<sup>Optional</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.istio"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}

---

###### `nginx`<sup>Optional</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.nginx"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

nginx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}

---

###### `ping_pong`<sup>Optional</sup> <a name="ping_pong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.pingPong"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

ping_pong block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}

---

###### `smi`<sup>Optional</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.smi"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

smi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}

---

###### `stable_service`<sup>Optional</sup> <a name="stable_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.stableService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}.

---

##### `reset_failure_policy` <a name="reset_failure_policy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spot_deployment` <a name="reset_spot_deployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment"></a>

```python
def reset_spot_deployment() -> None
```

##### `reset_spot_deployments` <a name="reset_spot_deployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments"></a>

```python
def reset_spot_deployments() -> None
```

##### `reset_traffic` <a name="reset_traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic"></a>

```python
def reset_traffic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpec.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpec.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpec.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpec.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceancdRolloutSpec to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceancdRolloutSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdRolloutSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment">spot_deployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments">spot_deployments</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput">failure_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput">rollout_spec_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput">spot_deployment_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput">spot_deployments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput">strategy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput">traffic_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName">rollout_spec_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy"></a>

```python
failure_policy: OceancdRolloutSpecFailurePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a>

---

##### `spot_deployment`<sup>Required</sup> <a name="spot_deployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment"></a>

```python
spot_deployment: OceancdRolloutSpecSpotDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a>

---

##### `spot_deployments`<sup>Required</sup> <a name="spot_deployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments"></a>

```python
spot_deployments: OceancdRolloutSpecSpotDeploymentsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy"></a>

```python
strategy: OceancdRolloutSpecStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic"></a>

```python
traffic: OceancdRolloutSpecTrafficOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a>

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput"></a>

```python
failure_policy_input: OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rollout_spec_name_input`<sup>Optional</sup> <a name="rollout_spec_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput"></a>

```python
rollout_spec_name_input: str
```

- *Type:* str

---

##### `spot_deployment_input`<sup>Optional</sup> <a name="spot_deployment_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput"></a>

```python
spot_deployment_input: OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `spot_deployments_input`<sup>Optional</sup> <a name="spot_deployments_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput"></a>

```python
spot_deployments_input: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput"></a>

```python
strategy_input: OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `traffic_input`<sup>Optional</sup> <a name="traffic_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput"></a>

```python
traffic_input: OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rollout_spec_name`<sup>Required</sup> <a name="rollout_spec_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName"></a>

```python
rollout_spec_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdRolloutSpecConfig <a name="OceancdRolloutSpecConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rollout_spec_name: str,
  strategy: OceancdRolloutSpecStrategy,
  failure_policy: OceancdRolloutSpecFailurePolicy = None,
  id: str = None,
  spot_deployment: OceancdRolloutSpecSpotDeployment = None,
  spot_deployments: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]] = None,
  traffic: OceancdRolloutSpecTraffic = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName">rollout_spec_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment">spot_deployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments">spot_deployments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]</code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rollout_spec_name`<sup>Required</sup> <a name="rollout_spec_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName"></a>

```python
rollout_spec_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy"></a>

```python
strategy: OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy"></a>

```python
failure_policy: OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spot_deployment`<sup>Optional</sup> <a name="spot_deployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment"></a>

```python
spot_deployment: OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `spot_deployments`<sup>Optional</sup> <a name="spot_deployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments"></a>

```python
spot_deployments: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic"></a>

```python
traffic: OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

### OceancdRolloutSpecFailurePolicy <a name="OceancdRolloutSpecFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy(
  action: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}.

---

### OceancdRolloutSpecSpotDeployment <a name="OceancdRolloutSpecSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment(
  spot_deployment_cluster_id: str = None,
  spot_deployment_name: str = None,
  spot_deployment_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId">spot_deployment_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName">spot_deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace">spot_deployment_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}. |

---

##### `spot_deployment_cluster_id`<sup>Optional</sup> <a name="spot_deployment_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId"></a>

```python
spot_deployment_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}.

---

##### `spot_deployment_name`<sup>Optional</sup> <a name="spot_deployment_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName"></a>

```python
spot_deployment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}.

---

##### `spot_deployment_namespace`<sup>Optional</sup> <a name="spot_deployment_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace"></a>

```python
spot_deployment_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}.

---

### OceancdRolloutSpecSpotDeployments <a name="OceancdRolloutSpecSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments(
  spot_deployments_cluster_id: str = None,
  spot_deployments_name: str = None,
  spot_deployments_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId">spot_deployments_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName">spot_deployments_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace">spot_deployments_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}. |

---

##### `spot_deployments_cluster_id`<sup>Optional</sup> <a name="spot_deployments_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId"></a>

```python
spot_deployments_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}.

---

##### `spot_deployments_name`<sup>Optional</sup> <a name="spot_deployments_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName"></a>

```python
spot_deployments_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}.

---

##### `spot_deployments_namespace`<sup>Optional</sup> <a name="spot_deployments_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace"></a>

```python
spot_deployments_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}.

---

### OceancdRolloutSpecStrategy <a name="OceancdRolloutSpecStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategy(
  strategy_name: str,
  args: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName">strategy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args">args</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]</code> | args block. |

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args"></a>

```python
args: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}

---

### OceancdRolloutSpecStrategyArgs <a name="OceancdRolloutSpecStrategyArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs(
  arg_name: str,
  arg_value: str = None,
  value_from: OceancdRolloutSpecStrategyArgsValueFrom = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName">arg_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue">arg_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | value_from block. |

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}.

---

##### `arg_value`<sup>Optional</sup> <a name="arg_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue"></a>

```python
arg_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}.

---

##### `value_from`<sup>Optional</sup> <a name="value_from" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom"></a>

```python
value_from: OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#value_from OceancdRolloutSpec#value_from}

---

### OceancdRolloutSpecStrategyArgsValueFrom <a name="OceancdRolloutSpecStrategyArgsValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom(
  field_ref: OceancdRolloutSpecStrategyArgsValueFromFieldRef
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef">field_ref</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | field_ref block. |

---

##### `field_ref`<sup>Required</sup> <a name="field_ref" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef"></a>

```python
field_ref: OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}

---

### OceancdRolloutSpecStrategyArgsValueFromFieldRef <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef(
  field_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath">field_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}. |

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}.

---

### OceancdRolloutSpecTraffic <a name="OceancdRolloutSpecTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTraffic(
  alb: OceancdRolloutSpecTrafficAlb = None,
  ambassador: OceancdRolloutSpecTrafficAmbassador = None,
  canary_service: str = None,
  istio: OceancdRolloutSpecTrafficIstio = None,
  nginx: OceancdRolloutSpecTrafficNginx = None,
  ping_pong: OceancdRolloutSpecTrafficPingPong = None,
  smi: OceancdRolloutSpecTrafficSmi = None,
  stable_service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | ambassador block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService">canary_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | istio block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | nginx block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong">ping_pong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | ping_pong block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | smi block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService">stable_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}. |

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb"></a>

```python
alb: OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}

---

##### `ambassador`<sup>Optional</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador"></a>

```python
ambassador: OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

ambassador block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}

---

##### `canary_service`<sup>Optional</sup> <a name="canary_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService"></a>

```python
canary_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}.

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio"></a>

```python
istio: OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}

---

##### `nginx`<sup>Optional</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx"></a>

```python
nginx: OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

nginx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}

---

##### `ping_pong`<sup>Optional</sup> <a name="ping_pong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong"></a>

```python
ping_pong: OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

ping_pong block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}

---

##### `smi`<sup>Optional</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi"></a>

```python
smi: OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

smi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}

---

##### `stable_service`<sup>Optional</sup> <a name="stable_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService"></a>

```python
stable_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}.

---

### OceancdRolloutSpecTrafficAlb <a name="OceancdRolloutSpecTrafficAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb(
  alb_ingress: str,
  alb_root_service: str,
  service_port: typing.Union[int, float],
  alb_annotation_prefix: str = None,
  stickiness_config: OceancdRolloutSpecTrafficAlbStickinessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress">alb_ingress</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService">alb_root_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort">service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix">alb_annotation_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig">stickiness_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | stickiness_config block. |

---

##### `alb_ingress`<sup>Required</sup> <a name="alb_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress"></a>

```python
alb_ingress: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}.

---

##### `alb_root_service`<sup>Required</sup> <a name="alb_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService"></a>

```python
alb_root_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}.

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort"></a>

```python
service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}.

---

##### `alb_annotation_prefix`<sup>Optional</sup> <a name="alb_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix"></a>

```python
alb_annotation_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}.

---

##### `stickiness_config`<sup>Optional</sup> <a name="stickiness_config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig"></a>

```python
stickiness_config: OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}

---

### OceancdRolloutSpecTrafficAlbStickinessConfig <a name="OceancdRolloutSpecTrafficAlbStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig(
  duration_seconds: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}. |

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}.

---

### OceancdRolloutSpecTrafficAmbassador <a name="OceancdRolloutSpecTrafficAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador(
  mappings: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings">mappings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings"></a>

```python
mappings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}.

---

### OceancdRolloutSpecTrafficIstio <a name="OceancdRolloutSpecTrafficIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio(
  virtual_services: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]],
  destination_rule: OceancdRolloutSpecTrafficIstioDestinationRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices">virtual_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]</code> | virtual_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule">destination_rule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | destination_rule block. |

---

##### `virtual_services`<sup>Required</sup> <a name="virtual_services" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices"></a>

```python
virtual_services: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]

virtual_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}

---

##### `destination_rule`<sup>Optional</sup> <a name="destination_rule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule"></a>

```python
destination_rule: OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

destination_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}

---

### OceancdRolloutSpecTrafficIstioDestinationRule <a name="OceancdRolloutSpecTrafficIstioDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule(
  canary_subset_name: str,
  destination_rule_name: str,
  stable_subset_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName">canary_subset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName">destination_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName">stable_subset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}. |

---

##### `canary_subset_name`<sup>Required</sup> <a name="canary_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName"></a>

```python
canary_subset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}.

---

##### `destination_rule_name`<sup>Required</sup> <a name="destination_rule_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName"></a>

```python
destination_rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}.

---

##### `stable_subset_name`<sup>Required</sup> <a name="stable_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName"></a>

```python
stable_subset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}.

---

### OceancdRolloutSpecTrafficIstioVirtualServices <a name="OceancdRolloutSpecTrafficIstioVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices(
  virtual_service_name: str,
  tls_routes: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]] = None,
  virtual_service_routes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes">tls_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]</code> | tls_routes block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes">virtual_service_routes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}. |

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}.

---

##### `tls_routes`<sup>Optional</sup> <a name="tls_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes"></a>

```python
tls_routes: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]

tls_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#tls_routes OceancdRolloutSpec#tls_routes}

---

##### `virtual_service_routes`<sup>Optional</sup> <a name="virtual_service_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes"></a>

```python
virtual_service_routes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}.

---

### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes(
  port: typing.Union[int, float] = None,
  sni_hosts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts">sni_hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}.

---

##### `sni_hosts`<sup>Optional</sup> <a name="sni_hosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts"></a>

```python
sni_hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}.

---

### OceancdRolloutSpecTrafficNginx <a name="OceancdRolloutSpecTrafficNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx(
  stable_ingress: str,
  additional_ingress_annotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation = None,
  nginx_annotation_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress">stable_ingress</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation">additional_ingress_annotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | additional_ingress_annotation block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix">nginx_annotation_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}. |

---

##### `stable_ingress`<sup>Required</sup> <a name="stable_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress"></a>

```python
stable_ingress: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}.

---

##### `additional_ingress_annotation`<sup>Optional</sup> <a name="additional_ingress_annotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation"></a>

```python
additional_ingress_annotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

additional_ingress_annotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}

---

##### `nginx_annotation_prefix`<sup>Optional</sup> <a name="nginx_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix"></a>

```python
nginx_annotation_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}.

---

### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation(
  canary_by_header: str = None,
  key1: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader">canary_by_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1">key1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}. |

---

##### `canary_by_header`<sup>Optional</sup> <a name="canary_by_header" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader"></a>

```python
canary_by_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}.

---

##### `key1`<sup>Optional</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1"></a>

```python
key1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}.

---

### OceancdRolloutSpecTrafficPingPong <a name="OceancdRolloutSpecTrafficPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong(
  ping_service: str,
  pong_service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService">ping_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService">pong_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}. |

---

##### `ping_service`<sup>Required</sup> <a name="ping_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService"></a>

```python
ping_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}.

---

##### `pong_service`<sup>Required</sup> <a name="pong_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService"></a>

```python
pong_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}.

---

### OceancdRolloutSpecTrafficSmi <a name="OceancdRolloutSpecTrafficSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi(
  smi_root_service: str = None,
  traffic_split_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService">smi_root_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName">traffic_split_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}. |

---

##### `smi_root_service`<sup>Optional</sup> <a name="smi_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService"></a>

```python
smi_root_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}.

---

##### `traffic_split_name`<sup>Optional</sup> <a name="traffic_split_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName"></a>

```python
traffic_split_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdRolloutSpecFailurePolicyOutputReference <a name="OceancdRolloutSpecFailurePolicyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---


### OceancdRolloutSpecSpotDeploymentOutputReference <a name="OceancdRolloutSpecSpotDeploymentOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId">reset_spot_deployment_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName">reset_spot_deployment_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace">reset_spot_deployment_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_spot_deployment_cluster_id` <a name="reset_spot_deployment_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId"></a>

```python
def reset_spot_deployment_cluster_id() -> None
```

##### `reset_spot_deployment_name` <a name="reset_spot_deployment_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName"></a>

```python
def reset_spot_deployment_name() -> None
```

##### `reset_spot_deployment_namespace` <a name="reset_spot_deployment_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace"></a>

```python
def reset_spot_deployment_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput">spot_deployment_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput">spot_deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput">spot_deployment_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId">spot_deployment_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName">spot_deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace">spot_deployment_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spot_deployment_cluster_id_input`<sup>Optional</sup> <a name="spot_deployment_cluster_id_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput"></a>

```python
spot_deployment_cluster_id_input: str
```

- *Type:* str

---

##### `spot_deployment_name_input`<sup>Optional</sup> <a name="spot_deployment_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput"></a>

```python
spot_deployment_name_input: str
```

- *Type:* str

---

##### `spot_deployment_namespace_input`<sup>Optional</sup> <a name="spot_deployment_namespace_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput"></a>

```python
spot_deployment_namespace_input: str
```

- *Type:* str

---

##### `spot_deployment_cluster_id`<sup>Required</sup> <a name="spot_deployment_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId"></a>

```python
spot_deployment_cluster_id: str
```

- *Type:* str

---

##### `spot_deployment_name`<sup>Required</sup> <a name="spot_deployment_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName"></a>

```python
spot_deployment_name: str
```

- *Type:* str

---

##### `spot_deployment_namespace`<sup>Required</sup> <a name="spot_deployment_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace"></a>

```python
spot_deployment_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---


### OceancdRolloutSpecSpotDeploymentsList <a name="OceancdRolloutSpecSpotDeploymentsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdRolloutSpecSpotDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecSpotDeployments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]]

---


### OceancdRolloutSpecSpotDeploymentsOutputReference <a name="OceancdRolloutSpecSpotDeploymentsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId">reset_spot_deployments_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName">reset_spot_deployments_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace">reset_spot_deployments_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_spot_deployments_cluster_id` <a name="reset_spot_deployments_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId"></a>

```python
def reset_spot_deployments_cluster_id() -> None
```

##### `reset_spot_deployments_name` <a name="reset_spot_deployments_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName"></a>

```python
def reset_spot_deployments_name() -> None
```

##### `reset_spot_deployments_namespace` <a name="reset_spot_deployments_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace"></a>

```python
def reset_spot_deployments_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput">spot_deployments_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput">spot_deployments_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput">spot_deployments_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId">spot_deployments_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName">spot_deployments_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace">spot_deployments_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spot_deployments_cluster_id_input`<sup>Optional</sup> <a name="spot_deployments_cluster_id_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput"></a>

```python
spot_deployments_cluster_id_input: str
```

- *Type:* str

---

##### `spot_deployments_name_input`<sup>Optional</sup> <a name="spot_deployments_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput"></a>

```python
spot_deployments_name_input: str
```

- *Type:* str

---

##### `spot_deployments_namespace_input`<sup>Optional</sup> <a name="spot_deployments_namespace_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput"></a>

```python
spot_deployments_namespace_input: str
```

- *Type:* str

---

##### `spot_deployments_cluster_id`<sup>Required</sup> <a name="spot_deployments_cluster_id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId"></a>

```python
spot_deployments_cluster_id: str
```

- *Type:* str

---

##### `spot_deployments_name`<sup>Required</sup> <a name="spot_deployments_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName"></a>

```python
spot_deployments_name: str
```

- *Type:* str

---

##### `spot_deployments_namespace`<sup>Required</sup> <a name="spot_deployments_namespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace"></a>

```python
spot_deployments_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdRolloutSpecSpotDeployments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>]

---


### OceancdRolloutSpecStrategyArgsList <a name="OceancdRolloutSpecStrategyArgsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdRolloutSpecStrategyArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]

---


### OceancdRolloutSpecStrategyArgsOutputReference <a name="OceancdRolloutSpecStrategyArgsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom">put_value_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue">reset_arg_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom">reset_value_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_from` <a name="put_value_from" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom"></a>

```python
def put_value_from(
  field_ref: OceancdRolloutSpecStrategyArgsValueFromFieldRef
) -> None
```

###### `field_ref`<sup>Required</sup> <a name="field_ref" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom.parameter.fieldRef"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}

---

##### `reset_arg_value` <a name="reset_arg_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue"></a>

```python
def reset_arg_value() -> None
```

##### `reset_value_from` <a name="reset_value_from" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom"></a>

```python
def reset_value_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput">arg_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput">value_from_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue">arg_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom"></a>

```python
value_from: OceancdRolloutSpecStrategyArgsValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a>

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `arg_value_input`<sup>Optional</sup> <a name="arg_value_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput"></a>

```python
arg_value_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput"></a>

```python
value_from_input: OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `arg_value`<sup>Required</sup> <a name="arg_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue"></a>

```python
arg_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdRolloutSpecStrategyArgs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]

---


### OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


### OceancdRolloutSpecStrategyArgsValueFromOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef">put_field_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_ref` <a name="put_field_ref" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef"></a>

```python
def put_field_ref(
  field_path: str
) -> None
```

###### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef.parameter.fieldPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef">field_ref</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput">field_ref_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_ref`<sup>Required</sup> <a name="field_ref" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef"></a>

```python
field_ref: OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a>

---

##### `field_ref_input`<sup>Optional</sup> <a name="field_ref_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput"></a>

```python
field_ref_input: OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---


### OceancdRolloutSpecStrategyOutputReference <a name="OceancdRolloutSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs">put_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs">reset_args</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_args` <a name="put_args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs"></a>

```python
def put_args(
  value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput">args_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput">strategy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName">strategy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args"></a>

```python
args: OceancdRolloutSpecStrategyArgsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput"></a>

```python
args_input: typing.Union[IResolvable, typing.List[OceancdRolloutSpecStrategyArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>]]

---

##### `strategy_name_input`<sup>Optional</sup> <a name="strategy_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput"></a>

```python
strategy_name_input: str
```

- *Type:* str

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---


### OceancdRolloutSpecTrafficAlbOutputReference <a name="OceancdRolloutSpecTrafficAlbOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig">put_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix">reset_alb_annotation_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig">reset_stickiness_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stickiness_config` <a name="put_stickiness_config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig"></a>

```python
def put_stickiness_config(
  duration_seconds: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}.

---

##### `reset_alb_annotation_prefix` <a name="reset_alb_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix"></a>

```python
def reset_alb_annotation_prefix() -> None
```

##### `reset_stickiness_config` <a name="reset_stickiness_config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig"></a>

```python
def reset_stickiness_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig">stickiness_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput">alb_annotation_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput">alb_ingress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput">alb_root_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput">service_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput">stickiness_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix">alb_annotation_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress">alb_ingress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService">alb_root_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort">service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stickiness_config`<sup>Required</sup> <a name="stickiness_config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig"></a>

```python
stickiness_config: OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a>

---

##### `alb_annotation_prefix_input`<sup>Optional</sup> <a name="alb_annotation_prefix_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput"></a>

```python
alb_annotation_prefix_input: str
```

- *Type:* str

---

##### `alb_ingress_input`<sup>Optional</sup> <a name="alb_ingress_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput"></a>

```python
alb_ingress_input: str
```

- *Type:* str

---

##### `alb_root_service_input`<sup>Optional</sup> <a name="alb_root_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput"></a>

```python
alb_root_service_input: str
```

- *Type:* str

---

##### `service_port_input`<sup>Optional</sup> <a name="service_port_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput"></a>

```python
service_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stickiness_config_input`<sup>Optional</sup> <a name="stickiness_config_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput"></a>

```python
stickiness_config_input: OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `alb_annotation_prefix`<sup>Required</sup> <a name="alb_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix"></a>

```python
alb_annotation_prefix: str
```

- *Type:* str

---

##### `alb_ingress`<sup>Required</sup> <a name="alb_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress"></a>

```python
alb_ingress: str
```

- *Type:* str

---

##### `alb_root_service`<sup>Required</sup> <a name="alb_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService"></a>

```python
alb_root_service: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort"></a>

```python
service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---


### OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference <a name="OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---


### OceancdRolloutSpecTrafficAmbassadorOutputReference <a name="OceancdRolloutSpecTrafficAmbassadorOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput">mappings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings">mappings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mappings_input`<sup>Optional</sup> <a name="mappings_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput"></a>

```python
mappings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings"></a>

```python
mappings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---


### OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference <a name="OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput">canary_subset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput">destination_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput">stable_subset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName">canary_subset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName">destination_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName">stable_subset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canary_subset_name_input`<sup>Optional</sup> <a name="canary_subset_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput"></a>

```python
canary_subset_name_input: str
```

- *Type:* str

---

##### `destination_rule_name_input`<sup>Optional</sup> <a name="destination_rule_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput"></a>

```python
destination_rule_name_input: str
```

- *Type:* str

---

##### `stable_subset_name_input`<sup>Optional</sup> <a name="stable_subset_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput"></a>

```python
stable_subset_name_input: str
```

- *Type:* str

---

##### `canary_subset_name`<sup>Required</sup> <a name="canary_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName"></a>

```python
canary_subset_name: str
```

- *Type:* str

---

##### `destination_rule_name`<sup>Required</sup> <a name="destination_rule_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName"></a>

```python
destination_rule_name: str
```

- *Type:* str

---

##### `stable_subset_name`<sup>Required</sup> <a name="stable_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName"></a>

```python
stable_subset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---


### OceancdRolloutSpecTrafficIstioOutputReference <a name="OceancdRolloutSpecTrafficIstioOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule">put_destination_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices">put_virtual_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule">reset_destination_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_rule` <a name="put_destination_rule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule"></a>

```python
def put_destination_rule(
  canary_subset_name: str,
  destination_rule_name: str,
  stable_subset_name: str
) -> None
```

###### `canary_subset_name`<sup>Required</sup> <a name="canary_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.canarySubsetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}.

---

###### `destination_rule_name`<sup>Required</sup> <a name="destination_rule_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.destinationRuleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}.

---

###### `stable_subset_name`<sup>Required</sup> <a name="stable_subset_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.stableSubsetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}.

---

##### `put_virtual_services` <a name="put_virtual_services" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices"></a>

```python
def put_virtual_services(
  value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]

---

##### `reset_destination_rule` <a name="reset_destination_rule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule"></a>

```python
def reset_destination_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule">destination_rule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices">virtual_services</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput">destination_rule_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput">virtual_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_rule`<sup>Required</sup> <a name="destination_rule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule"></a>

```python
destination_rule: OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a>

---

##### `virtual_services`<sup>Required</sup> <a name="virtual_services" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices"></a>

```python
virtual_services: OceancdRolloutSpecTrafficIstioVirtualServicesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a>

---

##### `destination_rule_input`<sup>Optional</sup> <a name="destination_rule_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput"></a>

```python
destination_rule_input: OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `virtual_services_input`<sup>Optional</sup> <a name="virtual_services_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput"></a>

```python
virtual_services_input: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]

---


### OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes">put_tls_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes">reset_tls_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes">reset_virtual_service_routes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tls_routes` <a name="put_tls_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes"></a>

```python
def put_tls_routes(
  value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]

---

##### `reset_tls_routes` <a name="reset_tls_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes"></a>

```python
def reset_tls_routes() -> None
```

##### `reset_virtual_service_routes` <a name="reset_virtual_service_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes"></a>

```python
def reset_virtual_service_routes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes">tls_routes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput">tls_routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput">virtual_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput">virtual_service_routes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes">virtual_service_routes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls_routes`<sup>Required</sup> <a name="tls_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes"></a>

```python
tls_routes: OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a>

---

##### `tls_routes_input`<sup>Optional</sup> <a name="tls_routes_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput"></a>

```python
tls_routes_input: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]

---

##### `virtual_service_name_input`<sup>Optional</sup> <a name="virtual_service_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput"></a>

```python
virtual_service_name_input: str
```

- *Type:* str

---

##### `virtual_service_routes_input`<sup>Optional</sup> <a name="virtual_service_routes_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput"></a>

```python
virtual_service_routes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `virtual_service_routes`<sup>Required</sup> <a name="virtual_service_routes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes"></a>

```python
virtual_service_routes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdRolloutSpecTrafficIstioVirtualServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]]

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts">reset_sni_hosts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_sni_hosts` <a name="reset_sni_hosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts"></a>

```python
def reset_sni_hosts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput">sni_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts">sni_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sni_hosts_input`<sup>Optional</sup> <a name="sni_hosts_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput"></a>

```python
sni_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sni_hosts`<sup>Required</sup> <a name="sni_hosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts"></a>

```python
sni_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>]

---


### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader">reset_canary_by_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1">reset_key1</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canary_by_header` <a name="reset_canary_by_header" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader"></a>

```python
def reset_canary_by_header() -> None
```

##### `reset_key1` <a name="reset_key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1"></a>

```python
def reset_key1() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput">canary_by_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input">key1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader">canary_by_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1">key1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canary_by_header_input`<sup>Optional</sup> <a name="canary_by_header_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput"></a>

```python
canary_by_header_input: str
```

- *Type:* str

---

##### `key1_input`<sup>Optional</sup> <a name="key1_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input"></a>

```python
key1_input: str
```

- *Type:* str

---

##### `canary_by_header`<sup>Required</sup> <a name="canary_by_header" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader"></a>

```python
canary_by_header: str
```

- *Type:* str

---

##### `key1`<sup>Required</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1"></a>

```python
key1: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---


### OceancdRolloutSpecTrafficNginxOutputReference <a name="OceancdRolloutSpecTrafficNginxOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation">put_additional_ingress_annotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation">reset_additional_ingress_annotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix">reset_nginx_annotation_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_ingress_annotation` <a name="put_additional_ingress_annotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation"></a>

```python
def put_additional_ingress_annotation(
  canary_by_header: str = None,
  key1: str = None
) -> None
```

###### `canary_by_header`<sup>Optional</sup> <a name="canary_by_header" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation.parameter.canaryByHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}.

---

###### `key1`<sup>Optional</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation.parameter.key1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}.

---

##### `reset_additional_ingress_annotation` <a name="reset_additional_ingress_annotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation"></a>

```python
def reset_additional_ingress_annotation() -> None
```

##### `reset_nginx_annotation_prefix` <a name="reset_nginx_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix"></a>

```python
def reset_nginx_annotation_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation">additional_ingress_annotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput">additional_ingress_annotation_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput">nginx_annotation_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput">stable_ingress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix">nginx_annotation_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress">stable_ingress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_ingress_annotation`<sup>Required</sup> <a name="additional_ingress_annotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation"></a>

```python
additional_ingress_annotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a>

---

##### `additional_ingress_annotation_input`<sup>Optional</sup> <a name="additional_ingress_annotation_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput"></a>

```python
additional_ingress_annotation_input: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `nginx_annotation_prefix_input`<sup>Optional</sup> <a name="nginx_annotation_prefix_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput"></a>

```python
nginx_annotation_prefix_input: str
```

- *Type:* str

---

##### `stable_ingress_input`<sup>Optional</sup> <a name="stable_ingress_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput"></a>

```python
stable_ingress_input: str
```

- *Type:* str

---

##### `nginx_annotation_prefix`<sup>Required</sup> <a name="nginx_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix"></a>

```python
nginx_annotation_prefix: str
```

- *Type:* str

---

##### `stable_ingress`<sup>Required</sup> <a name="stable_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress"></a>

```python
stable_ingress: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---


### OceancdRolloutSpecTrafficOutputReference <a name="OceancdRolloutSpecTrafficOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb">put_alb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador">put_ambassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio">put_istio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx">put_nginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong">put_ping_pong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi">put_smi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb">reset_alb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador">reset_ambassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService">reset_canary_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio">reset_istio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx">reset_nginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong">reset_ping_pong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi">reset_smi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService">reset_stable_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alb` <a name="put_alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb"></a>

```python
def put_alb(
  alb_ingress: str,
  alb_root_service: str,
  service_port: typing.Union[int, float],
  alb_annotation_prefix: str = None,
  stickiness_config: OceancdRolloutSpecTrafficAlbStickinessConfig = None
) -> None
```

###### `alb_ingress`<sup>Required</sup> <a name="alb_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.albIngress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}.

---

###### `alb_root_service`<sup>Required</sup> <a name="alb_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.albRootService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}.

---

###### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.servicePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}.

---

###### `alb_annotation_prefix`<sup>Optional</sup> <a name="alb_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.albAnnotationPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}.

---

###### `stickiness_config`<sup>Optional</sup> <a name="stickiness_config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.stickinessConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}

---

##### `put_ambassador` <a name="put_ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador"></a>

```python
def put_ambassador(
  mappings: typing.List[str]
) -> None
```

###### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador.parameter.mappings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}.

---

##### `put_istio` <a name="put_istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio"></a>

```python
def put_istio(
  virtual_services: typing.Union[IResolvable, typing.List[OceancdRolloutSpecTrafficIstioVirtualServices]],
  destination_rule: OceancdRolloutSpecTrafficIstioDestinationRule = None
) -> None
```

###### `virtual_services`<sup>Required</sup> <a name="virtual_services" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio.parameter.virtualServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>]]

virtual_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}

---

###### `destination_rule`<sup>Optional</sup> <a name="destination_rule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio.parameter.destinationRule"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

destination_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}

---

##### `put_nginx` <a name="put_nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx"></a>

```python
def put_nginx(
  stable_ingress: str,
  additional_ingress_annotation: OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation = None,
  nginx_annotation_prefix: str = None
) -> None
```

###### `stable_ingress`<sup>Required</sup> <a name="stable_ingress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.stableIngress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}.

---

###### `additional_ingress_annotation`<sup>Optional</sup> <a name="additional_ingress_annotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.additionalIngressAnnotation"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

additional_ingress_annotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}

---

###### `nginx_annotation_prefix`<sup>Optional</sup> <a name="nginx_annotation_prefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.nginxAnnotationPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}.

---

##### `put_ping_pong` <a name="put_ping_pong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong"></a>

```python
def put_ping_pong(
  ping_service: str,
  pong_service: str
) -> None
```

###### `ping_service`<sup>Required</sup> <a name="ping_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong.parameter.pingService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}.

---

###### `pong_service`<sup>Required</sup> <a name="pong_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong.parameter.pongService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}.

---

##### `put_smi` <a name="put_smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi"></a>

```python
def put_smi(
  smi_root_service: str = None,
  traffic_split_name: str = None
) -> None
```

###### `smi_root_service`<sup>Optional</sup> <a name="smi_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi.parameter.smiRootService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}.

---

###### `traffic_split_name`<sup>Optional</sup> <a name="traffic_split_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi.parameter.trafficSplitName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.205.1/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}.

---

##### `reset_alb` <a name="reset_alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb"></a>

```python
def reset_alb() -> None
```

##### `reset_ambassador` <a name="reset_ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador"></a>

```python
def reset_ambassador() -> None
```

##### `reset_canary_service` <a name="reset_canary_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService"></a>

```python
def reset_canary_service() -> None
```

##### `reset_istio` <a name="reset_istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio"></a>

```python
def reset_istio() -> None
```

##### `reset_nginx` <a name="reset_nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx"></a>

```python
def reset_nginx() -> None
```

##### `reset_ping_pong` <a name="reset_ping_pong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong"></a>

```python
def reset_ping_pong() -> None
```

##### `reset_smi` <a name="reset_smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi"></a>

```python
def reset_smi() -> None
```

##### `reset_stable_service` <a name="reset_stable_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService"></a>

```python
def reset_stable_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong">ping_pong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput">alb_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput">ambassador_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput">canary_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput">istio_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput">nginx_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput">ping_pong_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput">smi_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput">stable_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService">canary_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService">stable_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb"></a>

```python
alb: OceancdRolloutSpecTrafficAlbOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a>

---

##### `ambassador`<sup>Required</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador"></a>

```python
ambassador: OceancdRolloutSpecTrafficAmbassadorOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a>

---

##### `istio`<sup>Required</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio"></a>

```python
istio: OceancdRolloutSpecTrafficIstioOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a>

---

##### `nginx`<sup>Required</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx"></a>

```python
nginx: OceancdRolloutSpecTrafficNginxOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a>

---

##### `ping_pong`<sup>Required</sup> <a name="ping_pong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong"></a>

```python
ping_pong: OceancdRolloutSpecTrafficPingPongOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a>

---

##### `smi`<sup>Required</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi"></a>

```python
smi: OceancdRolloutSpecTrafficSmiOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a>

---

##### `alb_input`<sup>Optional</sup> <a name="alb_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput"></a>

```python
alb_input: OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `ambassador_input`<sup>Optional</sup> <a name="ambassador_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput"></a>

```python
ambassador_input: OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `canary_service_input`<sup>Optional</sup> <a name="canary_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput"></a>

```python
canary_service_input: str
```

- *Type:* str

---

##### `istio_input`<sup>Optional</sup> <a name="istio_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput"></a>

```python
istio_input: OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `nginx_input`<sup>Optional</sup> <a name="nginx_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput"></a>

```python
nginx_input: OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `ping_pong_input`<sup>Optional</sup> <a name="ping_pong_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput"></a>

```python
ping_pong_input: OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `smi_input`<sup>Optional</sup> <a name="smi_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput"></a>

```python
smi_input: OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `stable_service_input`<sup>Optional</sup> <a name="stable_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput"></a>

```python
stable_service_input: str
```

- *Type:* str

---

##### `canary_service`<sup>Required</sup> <a name="canary_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService"></a>

```python
canary_service: str
```

- *Type:* str

---

##### `stable_service`<sup>Required</sup> <a name="stable_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService"></a>

```python
stable_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---


### OceancdRolloutSpecTrafficPingPongOutputReference <a name="OceancdRolloutSpecTrafficPingPongOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput">ping_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput">pong_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService">ping_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService">pong_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ping_service_input`<sup>Optional</sup> <a name="ping_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput"></a>

```python
ping_service_input: str
```

- *Type:* str

---

##### `pong_service_input`<sup>Optional</sup> <a name="pong_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput"></a>

```python
pong_service_input: str
```

- *Type:* str

---

##### `ping_service`<sup>Required</sup> <a name="ping_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService"></a>

```python
ping_service: str
```

- *Type:* str

---

##### `pong_service`<sup>Required</sup> <a name="pong_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService"></a>

```python
pong_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---


### OceancdRolloutSpecTrafficSmiOutputReference <a name="OceancdRolloutSpecTrafficSmiOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_rollout_spec

oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService">reset_smi_root_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName">reset_traffic_split_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_smi_root_service` <a name="reset_smi_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService"></a>

```python
def reset_smi_root_service() -> None
```

##### `reset_traffic_split_name` <a name="reset_traffic_split_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName"></a>

```python
def reset_traffic_split_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput">smi_root_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput">traffic_split_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService">smi_root_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName">traffic_split_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `smi_root_service_input`<sup>Optional</sup> <a name="smi_root_service_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput"></a>

```python
smi_root_service_input: str
```

- *Type:* str

---

##### `traffic_split_name_input`<sup>Optional</sup> <a name="traffic_split_name_input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput"></a>

```python
traffic_split_name_input: str
```

- *Type:* str

---

##### `smi_root_service`<sup>Required</sup> <a name="smi_root_service" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService"></a>

```python
smi_root_service: str
```

- *Type:* str

---

##### `traffic_split_name`<sup>Required</sup> <a name="traffic_split_name" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName"></a>

```python
traffic_split_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue"></a>

```python
internal_value: OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---



