# `oceancdStrategy` Submodule <a name="`oceancdStrategy` Submodule" id="@cdktf/provider-spotinst.oceancdStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdStrategy <a name="OceancdStrategy" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy spotinst_oceancd_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  strategy_name: str,
  canary: OceancdStrategyCanary = None,
  id: str = None,
  rolling: OceancdStrategyRolling = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.strategyName">strategy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.canary">canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | rolling block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.strategyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}.

---

##### `canary`<sup>Optional</sup> <a name="canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.canary"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rolling`<sup>Optional</sup> <a name="rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.rolling"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary">put_canary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling">put_rolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary">reset_canary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling">reset_rolling</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_canary` <a name="put_canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary"></a>

```python
def put_canary(
  steps: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]],
  background_verification: OceancdStrategyCanaryBackgroundVerification = None
) -> None
```

###### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

###### `background_verification`<sup>Optional</sup> <a name="background_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary.parameter.backgroundVerification"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

background_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}

---

##### `put_rolling` <a name="put_rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling"></a>

```python
def put_rolling(
  steps: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
) -> None
```

###### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

##### `reset_canary` <a name="reset_canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary"></a>

```python
def reset_canary() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rolling` <a name="reset_rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling"></a>

```python
def reset_rolling() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceancdStrategy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceancdStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput">canary_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput">rolling_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput">strategy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName">strategy_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `canary`<sup>Required</sup> <a name="canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary"></a>

```python
canary: OceancdStrategyCanaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a>

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling"></a>

```python
rolling: OceancdStrategyRollingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a>

---

##### `canary_input`<sup>Optional</sup> <a name="canary_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput"></a>

```python
canary_input: OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rolling_input`<sup>Optional</sup> <a name="rolling_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput"></a>

```python
rolling_input: OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `strategy_name_input`<sup>Optional</sup> <a name="strategy_name_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput"></a>

```python
strategy_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdStrategyCanary <a name="OceancdStrategyCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanary(
  steps: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]],
  background_verification: OceancdStrategyCanaryBackgroundVerification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification">background_verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | background_verification block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

##### `background_verification`<sup>Optional</sup> <a name="background_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification"></a>

```python
background_verification: OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

background_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}

---

### OceancdStrategyCanaryBackgroundVerification <a name="OceancdStrategyCanaryBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryBackgroundVerification(
  template_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyCanarySteps <a name="OceancdStrategyCanarySteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanarySteps(
  pause: OceancdStrategyCanaryStepsPause = None,
  set_canary_scale: OceancdStrategyCanaryStepsSetCanaryScale = None,
  set_header_route: OceancdStrategyCanaryStepsSetHeaderRoute = None,
  set_weight: typing.Union[int, float] = None,
  step_name: str = None,
  verification: OceancdStrategyCanaryStepsVerification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale">set_canary_scale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | set_canary_scale block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute">set_header_route</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | set_header_route block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight">set_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName">step_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | verification block. |

---

##### `pause`<sup>Optional</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause"></a>

```python
pause: OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `set_canary_scale`<sup>Optional</sup> <a name="set_canary_scale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale"></a>

```python
set_canary_scale: OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

set_canary_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#set_canary_scale OceancdStrategy#set_canary_scale}

---

##### `set_header_route`<sup>Optional</sup> <a name="set_header_route" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute"></a>

```python
set_header_route: OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

set_header_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#set_header_route OceancdStrategy#set_header_route}

---

##### `set_weight`<sup>Optional</sup> <a name="set_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight"></a>

```python
set_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}.

---

##### `step_name`<sup>Optional</sup> <a name="step_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}.

---

##### `verification`<sup>Optional</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification"></a>

```python
verification: OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyCanaryStepsPause <a name="OceancdStrategyCanaryStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsPause(
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyCanaryStepsSetCanaryScale <a name="OceancdStrategyCanaryStepsSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale(
  match_traffic_weight: typing.Union[bool, IResolvable] = None,
  replicas: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight">match_traffic_weight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}. |

---

##### `match_traffic_weight`<sup>Optional</sup> <a name="match_traffic_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight"></a>

```python
match_traffic_weight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}.

---

### OceancdStrategyCanaryStepsSetHeaderRoute <a name="OceancdStrategyCanaryStepsSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute(
  header_route_name: str,
  match: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName">header_route_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match">match</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]</code> | match block. |

---

##### `header_route_name`<sup>Required</sup> <a name="header_route_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName"></a>

```python
header_route_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match"></a>

```python
match: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#match OceancdStrategy#match}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatch <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch(
  header_name: str,
  header_value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue">header_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | header_value block. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}.

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue"></a>

```python
header_value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

header_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_value OceancdStrategy#header_value}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue(
  exact: str = None,
  prefix: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}.

---

### OceancdStrategyCanaryStepsVerification <a name="OceancdStrategyCanaryStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsVerification(
  template_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyConfig <a name="OceancdStrategyConfig" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  strategy_name: str,
  canary: OceancdStrategyCanary = None,
  id: str = None,
  rolling: OceancdStrategyRolling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName">strategy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | rolling block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}.

---

##### `canary`<sup>Optional</sup> <a name="canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary"></a>

```python
canary: OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#id OceancdStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rolling`<sup>Optional</sup> <a name="rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling"></a>

```python
rolling: OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}

---

### OceancdStrategyRolling <a name="OceancdStrategyRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRolling(
  steps: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]</code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

### OceancdStrategyRollingSteps <a name="OceancdStrategyRollingSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingSteps(
  pause: OceancdStrategyRollingStepsPause = None,
  steps_name: str = None,
  verification: OceancdStrategyRollingStepsVerification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName">steps_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | verification block. |

---

##### `pause`<sup>Optional</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause"></a>

```python
pause: OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `steps_name`<sup>Optional</sup> <a name="steps_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName"></a>

```python
steps_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}.

---

##### `verification`<sup>Optional</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification"></a>

```python
verification: OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyRollingStepsPause <a name="OceancdStrategyRollingStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsPause(
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyRollingStepsVerification <a name="OceancdStrategyRollingStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsVerification(
  template_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdStrategyCanaryBackgroundVerificationOutputReference <a name="OceancdStrategyCanaryBackgroundVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput">template_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_names_input`<sup>Optional</sup> <a name="template_names_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput"></a>

```python
template_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---


### OceancdStrategyCanaryOutputReference <a name="OceancdStrategyCanaryOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification">put_background_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification">reset_background_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_background_verification` <a name="put_background_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification"></a>

```python
def put_background_verification(
  template_names: typing.List[str]
) -> None
```

###### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification.parameter.templateNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

##### `put_steps` <a name="put_steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]

---

##### `reset_background_verification` <a name="reset_background_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification"></a>

```python
def reset_background_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification">background_verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput">background_verification_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_verification`<sup>Required</sup> <a name="background_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification"></a>

```python
background_verification: OceancdStrategyCanaryBackgroundVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps"></a>

```python
steps: OceancdStrategyCanaryStepsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a>

---

##### `background_verification_input`<sup>Optional</sup> <a name="background_verification_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput"></a>

```python
background_verification_input: OceancdStrategyCanaryBackgroundVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanary
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---


### OceancdStrategyCanaryStepsList <a name="OceancdStrategyCanaryStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdStrategyCanaryStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdStrategyCanarySteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]]

---


### OceancdStrategyCanaryStepsOutputReference <a name="OceancdStrategyCanaryStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause">put_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale">put_set_canary_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute">put_set_header_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification">put_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause">reset_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale">reset_set_canary_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute">reset_set_header_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight">reset_set_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName">reset_step_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification">reset_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pause` <a name="put_pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause"></a>

```python
def put_pause(
  duration: str = None
) -> None
```

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

##### `put_set_canary_scale` <a name="put_set_canary_scale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale"></a>

```python
def put_set_canary_scale(
  match_traffic_weight: typing.Union[bool, IResolvable] = None,
  replicas: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `match_traffic_weight`<sup>Optional</sup> <a name="match_traffic_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.matchTrafficWeight"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}.

---

###### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.replicas"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}.

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}.

---

##### `put_set_header_route` <a name="put_set_header_route" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute"></a>

```python
def put_set_header_route(
  header_route_name: str,
  match: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
) -> None
```

###### `header_route_name`<sup>Required</sup> <a name="header_route_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute.parameter.headerRouteName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}.

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute.parameter.match"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#match OceancdStrategy#match}

---

##### `put_verification` <a name="put_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification"></a>

```python
def put_verification(
  template_names: typing.List[str]
) -> None
```

###### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification.parameter.templateNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

##### `reset_pause` <a name="reset_pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause"></a>

```python
def reset_pause() -> None
```

##### `reset_set_canary_scale` <a name="reset_set_canary_scale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale"></a>

```python
def reset_set_canary_scale() -> None
```

##### `reset_set_header_route` <a name="reset_set_header_route" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute"></a>

```python
def reset_set_header_route() -> None
```

##### `reset_set_weight` <a name="reset_set_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight"></a>

```python
def reset_set_weight() -> None
```

##### `reset_step_name` <a name="reset_step_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName"></a>

```python
def reset_step_name() -> None
```

##### `reset_verification` <a name="reset_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification"></a>

```python
def reset_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale">set_canary_scale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute">set_header_route</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput">pause_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput">set_canary_scale_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput">set_header_route_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput">set_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput">step_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput">verification_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight">set_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause`<sup>Required</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause"></a>

```python
pause: OceancdStrategyCanaryStepsPauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a>

---

##### `set_canary_scale`<sup>Required</sup> <a name="set_canary_scale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale"></a>

```python
set_canary_scale: OceancdStrategyCanaryStepsSetCanaryScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a>

---

##### `set_header_route`<sup>Required</sup> <a name="set_header_route" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute"></a>

```python
set_header_route: OceancdStrategyCanaryStepsSetHeaderRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification"></a>

```python
verification: OceancdStrategyCanaryStepsVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a>

---

##### `pause_input`<sup>Optional</sup> <a name="pause_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput"></a>

```python
pause_input: OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `set_canary_scale_input`<sup>Optional</sup> <a name="set_canary_scale_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput"></a>

```python
set_canary_scale_input: OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `set_header_route_input`<sup>Optional</sup> <a name="set_header_route_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput"></a>

```python
set_header_route_input: OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `set_weight_input`<sup>Optional</sup> <a name="set_weight_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput"></a>

```python
set_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_name_input`<sup>Optional</sup> <a name="step_name_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput"></a>

```python
step_name_input: str
```

- *Type:* str

---

##### `verification_input`<sup>Optional</sup> <a name="verification_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput"></a>

```python
verification_input: OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `set_weight`<sup>Required</sup> <a name="set_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight"></a>

```python
set_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdStrategyCanarySteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>]

---


### OceancdStrategyCanaryStepsPauseOutputReference <a name="OceancdStrategyCanaryStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---


### OceancdStrategyCanaryStepsSetCanaryScaleOutputReference <a name="OceancdStrategyCanaryStepsSetCanaryScaleOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight">reset_match_traffic_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas">reset_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_match_traffic_weight` <a name="reset_match_traffic_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight"></a>

```python
def reset_match_traffic_weight() -> None
```

##### `reset_replicas` <a name="reset_replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas"></a>

```python
def reset_replicas() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput">match_traffic_weight_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight">match_traffic_weight</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_traffic_weight_input`<sup>Optional</sup> <a name="match_traffic_weight_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput"></a>

```python
match_traffic_weight_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `match_traffic_weight`<sup>Required</sup> <a name="match_traffic_weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight"></a>

```python
match_traffic_weight: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryStepsSetCanaryScale
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchList <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue">put_header_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_value` <a name="put_header_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue"></a>

```python
def put_header_value(
  exact: str = None,
  prefix: str = None,
  regex: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}.

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue">header_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput">header_value_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue"></a>

```python
header_value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a>

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput"></a>

```python
header_value_input: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdStrategyCanaryStepsSetHeaderRouteMatch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]

---


### OceancdStrategyCanaryStepsSetHeaderRouteOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch"></a>

```python
def put_match(
  value: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput">header_route_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput">match_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName">header_route_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match"></a>

```python
match: OceancdStrategyCanaryStepsSetHeaderRouteMatchList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a>

---

##### `header_route_name_input`<sup>Optional</sup> <a name="header_route_name_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput"></a>

```python
header_route_name_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput"></a>

```python
match_input: typing.Union[IResolvable, typing.List[OceancdStrategyCanaryStepsSetHeaderRouteMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>]]

---

##### `header_route_name`<sup>Required</sup> <a name="header_route_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName"></a>

```python
header_route_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryStepsSetHeaderRoute
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---


### OceancdStrategyCanaryStepsVerificationOutputReference <a name="OceancdStrategyCanaryStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput">template_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_names_input`<sup>Optional</sup> <a name="template_names_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput"></a>

```python
template_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyCanaryStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---


### OceancdStrategyRollingOutputReference <a name="OceancdStrategyRollingOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps">put_steps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps"></a>

```python
steps: OceancdStrategyRollingStepsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a>

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyRolling
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---


### OceancdStrategyRollingStepsList <a name="OceancdStrategyRollingStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdStrategyRollingStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdStrategyRollingSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]]

---


### OceancdStrategyRollingStepsOutputReference <a name="OceancdStrategyRollingStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause">put_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification">put_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause">reset_pause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName">reset_steps_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification">reset_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pause` <a name="put_pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause"></a>

```python
def put_pause(
  duration: str = None
) -> None
```

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

##### `put_verification` <a name="put_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification"></a>

```python
def put_verification(
  template_names: typing.List[str]
) -> None
```

###### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification.parameter.templateNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.213.1/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

##### `reset_pause` <a name="reset_pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause"></a>

```python
def reset_pause() -> None
```

##### `reset_steps_name` <a name="reset_steps_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName"></a>

```python
def reset_steps_name() -> None
```

##### `reset_verification` <a name="reset_verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification"></a>

```python
def reset_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput">pause_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput">steps_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput">verification_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName">steps_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause`<sup>Required</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause"></a>

```python
pause: OceancdStrategyRollingStepsPauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification"></a>

```python
verification: OceancdStrategyRollingStepsVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a>

---

##### `pause_input`<sup>Optional</sup> <a name="pause_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput"></a>

```python
pause_input: OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `steps_name_input`<sup>Optional</sup> <a name="steps_name_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput"></a>

```python
steps_name_input: str
```

- *Type:* str

---

##### `verification_input`<sup>Optional</sup> <a name="verification_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput"></a>

```python
verification_input: OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `steps_name`<sup>Required</sup> <a name="steps_name" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName"></a>

```python
steps_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdStrategyRollingSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>]

---


### OceancdStrategyRollingStepsPauseOutputReference <a name="OceancdStrategyRollingStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyRollingStepsPause
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---


### OceancdStrategyRollingStepsVerificationOutputReference <a name="OceancdStrategyRollingStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_strategy

oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput">template_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames">template_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_names_input`<sup>Optional</sup> <a name="template_names_input" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput"></a>

```python
template_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_names`<sup>Required</sup> <a name="template_names" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames"></a>

```python
template_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue"></a>

```python
internal_value: OceancdStrategyRollingStepsVerification
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---



