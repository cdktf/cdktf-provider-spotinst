# `oceancdVerificationTemplate` Submodule <a name="`oceancdVerificationTemplate` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationTemplate <a name="OceancdVerificationTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template spotinst_oceancd_verification_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  args: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]] = None,
  id: str = None,
  metrics: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.args">args</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]</code> | args block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.metrics">metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]</code> | metrics block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.args"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#args OceancdVerificationTemplate#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.metrics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metrics OceancdVerificationTemplate#metrics}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs">put_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics">reset_metrics</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_args` <a name="put_args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs"></a>

```python
def put_args(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics"></a>

```python
def put_metrics(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics"></a>

```python
def reset_metrics() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceancdVerificationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceancdVerificationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args">args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput">args_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput">metrics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args"></a>

```python
args: OceancdVerificationTemplateArgsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics"></a>

```python
metrics: OceancdVerificationTemplateMetricsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput"></a>

```python
args_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput"></a>

```python
metrics_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationTemplateArgs <a name="OceancdVerificationTemplateArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgs(
  arg_name: str,
  value: str = None,
  value_from: OceancdVerificationTemplateArgsValueFrom = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName">arg_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | value_from block. |

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}.

---

##### `value_from`<sup>Optional</sup> <a name="value_from" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom"></a>

```python
value_from: OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#value_from OceancdVerificationTemplate#value_from}

---

### OceancdVerificationTemplateArgsValueFrom <a name="OceancdVerificationTemplateArgsValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom(
  secret_key_ref: OceancdVerificationTemplateArgsValueFromSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef"></a>

```python
secret_key_ref: OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#secret_key_ref OceancdVerificationTemplate#secret_key_ref}

---

### OceancdVerificationTemplateArgsValueFromSecretKeyRef <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef(
  key: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

### OceancdVerificationTemplateConfig <a name="OceancdVerificationTemplateConfig" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  args: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]] = None,
  id: str = None,
  metrics: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args">args</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]</code> | args block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics">metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]</code> | metrics block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args"></a>

```python
args: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#args OceancdVerificationTemplate#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics"></a>

```python
metrics: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metrics OceancdVerificationTemplate#metrics}

---

### OceancdVerificationTemplateMetrics <a name="OceancdVerificationTemplateMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetrics(
  metrics_name: str,
  provider: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProvider]],
  baseline: OceancdVerificationTemplateMetricsBaseline = None,
  consecutive_error_limit: typing.Union[int, float] = None,
  count: typing.Union[int, float] = None,
  dry_run: typing.Union[bool, IResolvable] = None,
  failure_condition: str = None,
  failure_limit: typing.Union[int, float] = None,
  initial_delay: str = None,
  interval: str = None,
  success_condition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName">metrics_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider">provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]</code> | provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline">baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | baseline block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit">consecutive_error_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun">dry_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition">failure_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit">failure_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay">initial_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval">interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition">success_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}. |

---

##### `metrics_name`<sup>Required</sup> <a name="metrics_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName"></a>

```python
metrics_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider"></a>

```python
provider: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#provider OceancdVerificationTemplate#provider}

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline"></a>

```python
baseline: OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#baseline OceancdVerificationTemplate#baseline}

---

##### `consecutive_error_limit`<sup>Optional</sup> <a name="consecutive_error_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit"></a>

```python
consecutive_error_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}.

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}.

---

##### `dry_run`<sup>Optional</sup> <a name="dry_run" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun"></a>

```python
dry_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}.

---

##### `failure_condition`<sup>Optional</sup> <a name="failure_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition"></a>

```python
failure_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}.

---

##### `failure_limit`<sup>Optional</sup> <a name="failure_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit"></a>

```python
failure_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}.

---

##### `initial_delay`<sup>Optional</sup> <a name="initial_delay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay"></a>

```python
initial_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval"></a>

```python
interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}.

---

##### `success_condition`<sup>Optional</sup> <a name="success_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition"></a>

```python
success_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}.

---

### OceancdVerificationTemplateMetricsBaseline <a name="OceancdVerificationTemplateMetricsBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline(
  baseline_provider: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]],
  threshold: str,
  max_range: typing.Union[int, float] = None,
  min_range: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider">baseline_provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]</code> | baseline_provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold">threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange">max_range</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange">min_range</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}. |

---

##### `baseline_provider`<sup>Required</sup> <a name="baseline_provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider"></a>

```python
baseline_provider: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]

baseline_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#baseline_provider OceancdVerificationTemplate#baseline_provider}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}.

---

##### `max_range`<sup>Optional</sup> <a name="max_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange"></a>

```python
max_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}.

---

##### `min_range`<sup>Optional</sup> <a name="min_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange"></a>

```python
min_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProvider <a name="OceancdVerificationTemplateMetricsBaselineBaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider(
  datadog: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog = None,
  new_relic: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic = None,
  prometheus: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic">new_relic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | prometheus block. |

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog"></a>

```python
datadog: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `new_relic`<sup>Optional</sup> <a name="new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic"></a>

```python
new_relic: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus"></a>

```python
prometheus: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog(
  datadog_query: str,
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery">datadog_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `datadog_query`<sup>Required</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery"></a>

```python
datadog_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic(
  new_relic_query: str,
  profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery">new_relic_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile">profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery"></a>

```python
new_relic_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile"></a>

```python
profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus(
  prometheus_query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery">prometheus_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery"></a>

```python
prometheus_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProvider <a name="OceancdVerificationTemplateMetricsProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider(
  cloud_watch: OceancdVerificationTemplateMetricsProviderCloudWatch = None,
  datadog: OceancdVerificationTemplateMetricsProviderDatadog = None,
  jenkins: OceancdVerificationTemplateMetricsProviderJenkins = None,
  job: OceancdVerificationTemplateMetricsProviderJob = None,
  new_relic: OceancdVerificationTemplateMetricsProviderNewRelic = None,
  prometheus: OceancdVerificationTemplateMetricsProviderPrometheus = None,
  web: OceancdVerificationTemplateMetricsProviderWeb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch">cloud_watch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job">job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | job block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic">new_relic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | prometheus block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web">web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | web block. |

---

##### `cloud_watch`<sup>Optional</sup> <a name="cloud_watch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch"></a>

```python
cloud_watch: OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#cloud_watch OceancdVerificationTemplate#cloud_watch}

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog"></a>

```python
datadog: OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `jenkins`<sup>Optional</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins"></a>

```python
jenkins: OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins OceancdVerificationTemplate#jenkins}

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job"></a>

```python
job: OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#job OceancdVerificationTemplate#job}

---

##### `new_relic`<sup>Optional</sup> <a name="new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic"></a>

```python
new_relic: OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus"></a>

```python
prometheus: OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web"></a>

```python
web: OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web OceancdVerificationTemplate#web}

---

### OceancdVerificationTemplateMetricsProviderCloudWatch <a name="OceancdVerificationTemplateMetricsProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch(
  metric_data_queries: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]],
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries">metric_data_queries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]</code> | metric_data_queries block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries"></a>

```python
metric_data_queries: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]

metric_data_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_data_queries OceancdVerificationTemplate#metric_data_queries}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries(
  id: str,
  expression: str = None,
  label: str = None,
  metric_stat: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat = None,
  period: typing.Union[int, float] = None,
  return_data: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | metric_stat block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}.

---

##### `metric_stat`<sup>Optional</sup> <a name="metric_stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat"></a>

```python
metric_stat: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

metric_stat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_stat OceancdVerificationTemplate#metric_stat}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}.

---

##### `return_data`<sup>Optional</sup> <a name="return_data" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat(
  metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric = None,
  metric_period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod">metric_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric"></a>

```python
metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric OceancdVerificationTemplate#metric}

---

##### `metric_period`<sup>Optional</sup> <a name="metric_period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod"></a>

```python
metric_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric(
  metric_name: str,
  dimensions: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimensions OceancdVerificationTemplate#dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions(
  dimension_name: str,
  dimension_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName">dimension_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue">dimension_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}. |

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}.

---

##### `dimension_value`<sup>Required</sup> <a name="dimension_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue"></a>

```python
dimension_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}.

---

### OceancdVerificationTemplateMetricsProviderDatadog <a name="OceancdVerificationTemplateMetricsProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog(
  datadog_query: str = None,
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery">datadog_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `datadog_query`<sup>Optional</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery"></a>

```python
datadog_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderJenkins <a name="OceancdVerificationTemplateMetricsProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins(
  jenkins_interval: str,
  pipeline_name: str,
  timeout: str,
  jenkins_parameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters = None,
  tls_verification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval">jenkins_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters">jenkins_parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | jenkins_parameters block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification">tls_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}. |

---

##### `jenkins_interval`<sup>Required</sup> <a name="jenkins_interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval"></a>

```python
jenkins_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}.

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}.

---

##### `jenkins_parameters`<sup>Optional</sup> <a name="jenkins_parameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters"></a>

```python
jenkins_parameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

jenkins_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins_parameters OceancdVerificationTemplate#jenkins_parameters}

---

##### `tls_verification`<sup>Optional</sup> <a name="tls_verification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification"></a>

```python
tls_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}.

---

### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters(
  parameter_key: str,
  parameter_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey">parameter_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}. |

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}.

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}.

---

### OceancdVerificationTemplateMetricsProviderJob <a name="OceancdVerificationTemplateMetricsProviderJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob(
  spec: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec">spec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]</code> | spec block. |

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec"></a>

```python
spec: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#spec OceancdVerificationTemplate#spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec(
  job_template: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]],
  backoff_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate">job_template</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]</code> | job_template block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit">backoff_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}. |

---

##### `job_template`<sup>Required</sup> <a name="job_template" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate"></a>

```python
job_template: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]

job_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#job_template OceancdVerificationTemplate#job_template}

---

##### `backoff_limit`<sup>Optional</sup> <a name="backoff_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit"></a>

```python
backoff_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate(
  template_spec: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec">template_spec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]</code> | template_spec block. |

---

##### `template_spec`<sup>Required</sup> <a name="template_spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec"></a>

```python
template_spec: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]

template_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#template_spec OceancdVerificationTemplate#template_spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec(
  containers: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]],
  restart_policy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers">containers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]</code> | containers block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy">restart_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}. |

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers"></a>

```python
containers: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#containers OceancdVerificationTemplate#containers}

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers(
  command: typing.List[str],
  container_name: str,
  image: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}. |

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}.

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}.

---

### OceancdVerificationTemplateMetricsProviderNewRelic <a name="OceancdVerificationTemplateMetricsProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic(
  new_relic_query: str,
  profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery">new_relic_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile">profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery"></a>

```python
new_relic_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile"></a>

```python
profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsProviderPrometheus <a name="OceancdVerificationTemplateMetricsProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus(
  prometheus_query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery">prometheus_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery"></a>

```python
prometheus_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProviderWeb <a name="OceancdVerificationTemplateMetricsProviderWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb(
  url: str,
  body: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  json_path: str = None,
  method: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  web_header: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath">json_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader">web_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]</code> | web_header block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}.

---

##### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}.

---

##### `web_header`<sup>Optional</sup> <a name="web_header" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader"></a>

```python
web_header: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]

web_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header OceancdVerificationTemplate#web_header}

---

### OceancdVerificationTemplateMetricsProviderWebWebHeader <a name="OceancdVerificationTemplateMetricsProviderWebWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader(
  web_header_key: str,
  web_header_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey">web_header_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue">web_header_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}. |

---

##### `web_header_key`<sup>Required</sup> <a name="web_header_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey"></a>

```python
web_header_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}.

---

##### `web_header_value`<sup>Required</sup> <a name="web_header_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue"></a>

```python
web_header_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationTemplateArgsList <a name="OceancdVerificationTemplateArgsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]]

---


### OceancdVerificationTemplateArgsOutputReference <a name="OceancdVerificationTemplateArgsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom">put_value_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom">reset_value_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_from` <a name="put_value_from" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom"></a>

```python
def put_value_from(
  secret_key_ref: OceancdVerificationTemplateArgsValueFromSecretKeyRef = None
) -> None
```

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#secret_key_ref OceancdVerificationTemplate#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_from` <a name="reset_value_from" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom"></a>

```python
def reset_value_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom">value_from</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput">value_from_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_from`<sup>Required</sup> <a name="value_from" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom"></a>

```python
value_from: OceancdVerificationTemplateArgsValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a>

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `value_from_input`<sup>Optional</sup> <a name="value_from_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput"></a>

```python
value_from_input: OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateArgs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>]

---


### OceancdVerificationTemplateArgsValueFromOutputReference <a name="OceancdVerificationTemplateArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  key: str,
  name: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---


### OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput">datadog_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery">datadog_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datadog_query_input`<sup>Optional</sup> <a name="datadog_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput"></a>

```python
datadog_query_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `datadog_query`<sup>Required</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery"></a>

```python
datadog_query: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderList <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile">reset_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput">new_relic_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery">new_relic_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_relic_query_input`<sup>Optional</sup> <a name="new_relic_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```python
new_relic_query_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery"></a>

```python
new_relic_query: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog">put_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic">put_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus">put_prometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog">reset_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic">reset_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus">reset_prometheus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_datadog` <a name="put_datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog"></a>

```python
def put_datadog(
  datadog_query: str,
  duration: str = None
) -> None
```

###### `datadog_query`<sup>Required</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog.parameter.datadogQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

##### `put_new_relic` <a name="put_new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic"></a>

```python
def put_new_relic(
  new_relic_query: str,
  profile: str = None
) -> None
```

###### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic.parameter.newRelicQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic.parameter.profile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

##### `put_prometheus` <a name="put_prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus"></a>

```python
def put_prometheus(
  prometheus_query: str
) -> None
```

###### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus.parameter.prometheusQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

##### `reset_datadog` <a name="reset_datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog"></a>

```python
def reset_datadog() -> None
```

##### `reset_new_relic` <a name="reset_new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic"></a>

```python
def reset_new_relic() -> None
```

##### `reset_prometheus` <a name="reset_prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus"></a>

```python
def reset_prometheus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic">new_relic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput">datadog_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput">new_relic_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput">prometheus_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog"></a>

```python
datadog: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a>

---

##### `new_relic`<sup>Required</sup> <a name="new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic"></a>

```python
new_relic: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus"></a>

```python
prometheus: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a>

---

##### `datadog_input`<sup>Optional</sup> <a name="datadog_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput"></a>

```python
datadog_input: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---

##### `new_relic_input`<sup>Optional</sup> <a name="new_relic_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput"></a>

```python
new_relic_input: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---

##### `prometheus_input`<sup>Optional</sup> <a name="prometheus_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput"></a>

```python
prometheus_input: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsBaselineBaselineProvider]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput">prometheus_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery">prometheus_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prometheus_query_input`<sup>Optional</sup> <a name="prometheus_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```python
prometheus_query_input: str
```

- *Type:* str

---

##### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery"></a>

```python
prometheus_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsBaselineOutputReference <a name="OceancdVerificationTemplateMetricsBaselineOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider">put_baseline_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange">reset_max_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange">reset_min_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_baseline_provider` <a name="put_baseline_provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider"></a>

```python
def put_baseline_provider(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]

---

##### `reset_max_range` <a name="reset_max_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange"></a>

```python
def reset_max_range() -> None
```

##### `reset_min_range` <a name="reset_min_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange"></a>

```python
def reset_min_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider">baseline_provider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput">baseline_provider_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput">max_range_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput">min_range_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange">max_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange">min_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_provider`<sup>Required</sup> <a name="baseline_provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider"></a>

```python
baseline_provider: OceancdVerificationTemplateMetricsBaselineBaselineProviderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a>

---

##### `baseline_provider_input`<sup>Optional</sup> <a name="baseline_provider_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput"></a>

```python
baseline_provider_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]

---

##### `max_range_input`<sup>Optional</sup> <a name="max_range_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput"></a>

```python
max_range_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_range_input`<sup>Optional</sup> <a name="min_range_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput"></a>

```python
min_range_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `max_range`<sup>Required</sup> <a name="max_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange"></a>

```python
max_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_range`<sup>Required</sup> <a name="min_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange"></a>

```python
min_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---


### OceancdVerificationTemplateMetricsList <a name="OceancdVerificationTemplateMetricsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]]

---


### OceancdVerificationTemplateMetricsOutputReference <a name="OceancdVerificationTemplateMetricsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline">put_baseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider">put_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline">reset_baseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit">reset_consecutive_error_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun">reset_dry_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition">reset_failure_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit">reset_failure_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay">reset_initial_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition">reset_success_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_baseline` <a name="put_baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline"></a>

```python
def put_baseline(
  baseline_provider: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsBaselineBaselineProvider]],
  threshold: str,
  max_range: typing.Union[int, float] = None,
  min_range: typing.Union[int, float] = None
) -> None
```

###### `baseline_provider`<sup>Required</sup> <a name="baseline_provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.baselineProvider"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>]]

baseline_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#baseline_provider OceancdVerificationTemplate#baseline_provider}

---

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.threshold"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}.

---

###### `max_range`<sup>Optional</sup> <a name="max_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.maxRange"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}.

---

###### `min_range`<sup>Optional</sup> <a name="min_range" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.minRange"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}.

---

##### `put_provider` <a name="put_provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider"></a>

```python
def put_provider(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProvider]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]

---

##### `reset_baseline` <a name="reset_baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline"></a>

```python
def reset_baseline() -> None
```

##### `reset_consecutive_error_limit` <a name="reset_consecutive_error_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit"></a>

```python
def reset_consecutive_error_limit() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_dry_run` <a name="reset_dry_run" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun"></a>

```python
def reset_dry_run() -> None
```

##### `reset_failure_condition` <a name="reset_failure_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition"></a>

```python
def reset_failure_condition() -> None
```

##### `reset_failure_limit` <a name="reset_failure_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit"></a>

```python
def reset_failure_limit() -> None
```

##### `reset_initial_delay` <a name="reset_initial_delay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay"></a>

```python
def reset_initial_delay() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_success_condition` <a name="reset_success_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition"></a>

```python
def reset_success_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline">baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput">baseline_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput">consecutive_error_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput">dry_run_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput">failure_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput">failure_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput">initial_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput">metrics_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput">provider_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput">success_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit">consecutive_error_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun">dry_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition">failure_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit">failure_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay">initial_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName">metrics_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition">success_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline"></a>

```python
baseline: OceancdVerificationTemplateMetricsBaselineOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider"></a>

```python
provider: OceancdVerificationTemplateMetricsProviderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a>

---

##### `baseline_input`<sup>Optional</sup> <a name="baseline_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput"></a>

```python
baseline_input: OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---

##### `consecutive_error_limit_input`<sup>Optional</sup> <a name="consecutive_error_limit_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput"></a>

```python
consecutive_error_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dry_run_input`<sup>Optional</sup> <a name="dry_run_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput"></a>

```python
dry_run_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_condition_input`<sup>Optional</sup> <a name="failure_condition_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput"></a>

```python
failure_condition_input: str
```

- *Type:* str

---

##### `failure_limit_input`<sup>Optional</sup> <a name="failure_limit_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput"></a>

```python
failure_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_input`<sup>Optional</sup> <a name="initial_delay_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput"></a>

```python
initial_delay_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `metrics_name_input`<sup>Optional</sup> <a name="metrics_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput"></a>

```python
metrics_name_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput"></a>

```python
provider_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]

---

##### `success_condition_input`<sup>Optional</sup> <a name="success_condition_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput"></a>

```python
success_condition_input: str
```

- *Type:* str

---

##### `consecutive_error_limit`<sup>Required</sup> <a name="consecutive_error_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit"></a>

```python
consecutive_error_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dry_run`<sup>Required</sup> <a name="dry_run" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun"></a>

```python
dry_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_condition`<sup>Required</sup> <a name="failure_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition"></a>

```python
failure_condition: str
```

- *Type:* str

---

##### `failure_limit`<sup>Required</sup> <a name="failure_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit"></a>

```python
failure_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay`<sup>Required</sup> <a name="initial_delay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay"></a>

```python
initial_delay: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `metrics_name`<sup>Required</sup> <a name="metrics_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName"></a>

```python
metrics_name: str
```

- *Type:* str

---

##### `success_condition`<sup>Required</sup> <a name="success_condition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition"></a>

```python
success_condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetrics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput">dimension_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue">dimension_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `dimension_value_input`<sup>Optional</sup> <a name="dimension_value_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput"></a>

```python
dimension_value_input: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `dimension_value`<sup>Required</sup> <a name="dimension_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue"></a>

```python
dimension_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod">reset_metric_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat">reset_stat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```python
def put_metric(
  metric_name: str,
  dimensions: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions]] = None,
  namespace: str = None
) -> None
```

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#dimensions OceancdVerificationTemplate#dimensions}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}.

---

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metric_period` <a name="reset_metric_period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod"></a>

```python
def reset_metric_period() -> None
```

##### `reset_stat` <a name="reset_stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```python
def reset_stat() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput">metric_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod">metric_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```python
metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```python
metric_input: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---

##### `metric_period_input`<sup>Optional</sup> <a name="metric_period_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput"></a>

```python
metric_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `metric_period`<sup>Required</sup> <a name="metric_period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod"></a>

```python
metric_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat">put_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat">reset_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData">reset_return_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_stat` <a name="put_metric_stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat"></a>

```python
def put_metric_stat(
  metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric = None,
  metric_period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
) -> None
```

###### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.metric"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric OceancdVerificationTemplate#metric}

---

###### `metric_period`<sup>Optional</sup> <a name="metric_period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.metricPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}.

---

###### `stat`<sup>Optional</sup> <a name="stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}.

---

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_metric_stat` <a name="reset_metric_stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat"></a>

```python
def reset_metric_stat() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_return_data` <a name="reset_return_data" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData"></a>

```python
def reset_return_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput">metric_stat_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput">return_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat"></a>

```python
metric_stat: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a>

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `metric_stat_input`<sup>Optional</sup> <a name="metric_stat_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput"></a>

```python
metric_stat_input: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data_input`<sup>Optional</sup> <a name="return_data_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput"></a>

```python
return_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries">put_metric_data_queries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_data_queries` <a name="put_metric_data_queries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries"></a>

```python
def put_metric_data_queries(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]

---

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries">metric_data_queries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput">metric_data_queries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries"></a>

```python
metric_data_queries: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `metric_data_queries_input`<sup>Optional</sup> <a name="metric_data_queries_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput"></a>

```python
metric_data_queries_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---


### OceancdVerificationTemplateMetricsProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery">reset_datadog_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datadog_query` <a name="reset_datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery"></a>

```python
def reset_datadog_query() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput">datadog_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery">datadog_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datadog_query_input`<sup>Optional</sup> <a name="datadog_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput"></a>

```python
datadog_query_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `datadog_query`<sup>Required</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery"></a>

```python
datadog_query: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput">parameter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key_input`<sup>Optional</sup> <a name="parameter_key_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput"></a>

```python
parameter_key_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters">put_jenkins_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters">reset_jenkins_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification">reset_tls_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jenkins_parameters` <a name="put_jenkins_parameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters"></a>

```python
def put_jenkins_parameters(
  parameter_key: str,
  parameter_value: str
) -> None
```

###### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters.parameter.parameterKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}.

---

###### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters.parameter.parameterValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}.

---

##### `reset_jenkins_parameters` <a name="reset_jenkins_parameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters"></a>

```python
def reset_jenkins_parameters() -> None
```

##### `reset_tls_verification` <a name="reset_tls_verification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification"></a>

```python
def reset_tls_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters">jenkins_parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput">jenkins_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput">jenkins_parameters_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput">pipeline_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput">tls_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval">jenkins_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification">tls_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jenkins_parameters`<sup>Required</sup> <a name="jenkins_parameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters"></a>

```python
jenkins_parameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a>

---

##### `jenkins_interval_input`<sup>Optional</sup> <a name="jenkins_interval_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput"></a>

```python
jenkins_interval_input: str
```

- *Type:* str

---

##### `jenkins_parameters_input`<sup>Optional</sup> <a name="jenkins_parameters_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput"></a>

```python
jenkins_parameters_input: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---

##### `pipeline_name_input`<sup>Optional</sup> <a name="pipeline_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput"></a>

```python
pipeline_name_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `tls_verification_input`<sup>Optional</sup> <a name="tls_verification_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput"></a>

```python
tls_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jenkins_interval`<sup>Required</sup> <a name="jenkins_interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval"></a>

```python
jenkins_interval: str
```

- *Type:* str

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `tls_verification`<sup>Required</sup> <a name="tls_verification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification"></a>

```python
tls_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---


### OceancdVerificationTemplateMetricsProviderJobOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec">put_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spec` <a name="put_spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec"></a>

```python
def put_spec(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput">spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec"></a>

```python
spec: OceancdVerificationTemplateMetricsProviderJobSpecList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput"></a>

```python
spec_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec">put_template_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_template_spec` <a name="put_template_spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec"></a>

```python
def put_template_spec(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec">template_spec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput">template_spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_spec`<sup>Required</sup> <a name="template_spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec"></a>

```python
template_spec: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a>

---

##### `template_spec_input`<sup>Optional</sup> <a name="template_spec_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput"></a>

```python
template_spec_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers">put_containers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers"></a>

```python
def put_containers(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput">containers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput">restart_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy">restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers"></a>

```python
containers: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput"></a>

```python
containers_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>]]

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput"></a>

```python
restart_policy_input: str
```

- *Type:* str

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>]

---


### OceancdVerificationTemplateMetricsProviderJobSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderJobSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]

---


### OceancdVerificationTemplateMetricsProviderJobSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate">put_job_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit">reset_backoff_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_template` <a name="put_job_template" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate"></a>

```python
def put_job_template(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]

---

##### `reset_backoff_limit` <a name="reset_backoff_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit"></a>

```python
def reset_backoff_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate">job_template</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput">backoff_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput">job_template_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit">backoff_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_template`<sup>Required</sup> <a name="job_template" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate"></a>

```python
job_template: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a>

---

##### `backoff_limit_input`<sup>Optional</sup> <a name="backoff_limit_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput"></a>

```python
backoff_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_template_input`<sup>Optional</sup> <a name="job_template_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput"></a>

```python
job_template_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>]]

---

##### `backoff_limit`<sup>Required</sup> <a name="backoff_limit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit"></a>

```python
backoff_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderJobSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]

---


### OceancdVerificationTemplateMetricsProviderList <a name="OceancdVerificationTemplateMetricsProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]]

---


### OceancdVerificationTemplateMetricsProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile">reset_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput">new_relic_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery">new_relic_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_relic_query_input`<sup>Optional</sup> <a name="new_relic_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```python
new_relic_query_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery"></a>

```python
new_relic_query: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsProviderOutputReference <a name="OceancdVerificationTemplateMetricsProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch">put_cloud_watch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog">put_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins">put_jenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob">put_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic">put_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus">put_prometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb">put_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch">reset_cloud_watch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog">reset_datadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins">reset_jenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob">reset_job</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic">reset_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus">reset_prometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb">reset_web</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch` <a name="put_cloud_watch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch"></a>

```python
def put_cloud_watch(
  metric_data_queries: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries]],
  duration: str = None
) -> None
```

###### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch.parameter.metricDataQueries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>]]

metric_data_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#metric_data_queries OceancdVerificationTemplate#metric_data_queries}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

##### `put_datadog` <a name="put_datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog"></a>

```python
def put_datadog(
  datadog_query: str = None,
  duration: str = None
) -> None
```

###### `datadog_query`<sup>Optional</sup> <a name="datadog_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog.parameter.datadogQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

##### `put_jenkins` <a name="put_jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins"></a>

```python
def put_jenkins(
  jenkins_interval: str,
  pipeline_name: str,
  timeout: str,
  jenkins_parameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters = None,
  tls_verification: typing.Union[bool, IResolvable] = None
) -> None
```

###### `jenkins_interval`<sup>Required</sup> <a name="jenkins_interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.jenkinsInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}.

---

###### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.pipelineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}.

---

###### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.timeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}.

---

###### `jenkins_parameters`<sup>Optional</sup> <a name="jenkins_parameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.jenkinsParameters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

jenkins_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#jenkins_parameters OceancdVerificationTemplate#jenkins_parameters}

---

###### `tls_verification`<sup>Optional</sup> <a name="tls_verification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.tlsVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}.

---

##### `put_job` <a name="put_job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob"></a>

```python
def put_job(
  spec: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderJobSpec]]
) -> None
```

###### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob.parameter.spec"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>]]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#spec OceancdVerificationTemplate#spec}

---

##### `put_new_relic` <a name="put_new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic"></a>

```python
def put_new_relic(
  new_relic_query: str,
  profile: str = None
) -> None
```

###### `new_relic_query`<sup>Required</sup> <a name="new_relic_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic.parameter.newRelicQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic.parameter.profile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

##### `put_prometheus` <a name="put_prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus"></a>

```python
def put_prometheus(
  prometheus_query: str
) -> None
```

###### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus.parameter.prometheusQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

##### `put_web` <a name="put_web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb"></a>

```python
def put_web(
  url: str,
  body: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  json_path: str = None,
  method: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  web_header: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]] = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}.

---

###### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}.

---

###### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}.

---

###### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.jsonPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}.

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}.

---

###### `web_header`<sup>Optional</sup> <a name="web_header" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.webHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]

web_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_verification_template#web_header OceancdVerificationTemplate#web_header}

---

##### `reset_cloud_watch` <a name="reset_cloud_watch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch"></a>

```python
def reset_cloud_watch() -> None
```

##### `reset_datadog` <a name="reset_datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog"></a>

```python
def reset_datadog() -> None
```

##### `reset_jenkins` <a name="reset_jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins"></a>

```python
def reset_jenkins() -> None
```

##### `reset_job` <a name="reset_job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob"></a>

```python
def reset_job() -> None
```

##### `reset_new_relic` <a name="reset_new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic"></a>

```python
def reset_new_relic() -> None
```

##### `reset_prometheus` <a name="reset_prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus"></a>

```python
def reset_prometheus() -> None
```

##### `reset_web` <a name="reset_web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb"></a>

```python
def reset_web() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch">cloud_watch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job">job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic">new_relic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web">web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput">cloud_watch_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput">datadog_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput">jenkins_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput">job_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput">new_relic_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput">prometheus_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput">web_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch`<sup>Required</sup> <a name="cloud_watch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch"></a>

```python
cloud_watch: OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog"></a>

```python
datadog: OceancdVerificationTemplateMetricsProviderDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a>

---

##### `jenkins`<sup>Required</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins"></a>

```python
jenkins: OceancdVerificationTemplateMetricsProviderJenkinsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job"></a>

```python
job: OceancdVerificationTemplateMetricsProviderJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a>

---

##### `new_relic`<sup>Required</sup> <a name="new_relic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic"></a>

```python
new_relic: OceancdVerificationTemplateMetricsProviderNewRelicOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus"></a>

```python
prometheus: OceancdVerificationTemplateMetricsProviderPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web"></a>

```python
web: OceancdVerificationTemplateMetricsProviderWebOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a>

---

##### `cloud_watch_input`<sup>Optional</sup> <a name="cloud_watch_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput"></a>

```python
cloud_watch_input: OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---

##### `datadog_input`<sup>Optional</sup> <a name="datadog_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput"></a>

```python
datadog_input: OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---

##### `jenkins_input`<sup>Optional</sup> <a name="jenkins_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput"></a>

```python
jenkins_input: OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---

##### `job_input`<sup>Optional</sup> <a name="job_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput"></a>

```python
job_input: OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---

##### `new_relic_input`<sup>Optional</sup> <a name="new_relic_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput"></a>

```python
new_relic_input: OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---

##### `prometheus_input`<sup>Optional</sup> <a name="prometheus_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput"></a>

```python
prometheus_input: OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---

##### `web_input`<sup>Optional</sup> <a name="web_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput"></a>

```python
web_input: OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProvider]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>]

---


### OceancdVerificationTemplateMetricsProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput">prometheus_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery">prometheus_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prometheus_query_input`<sup>Optional</sup> <a name="prometheus_query_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```python
prometheus_query_input: str
```

- *Type:* str

---

##### `prometheus_query`<sup>Required</sup> <a name="prometheus_query" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery"></a>

```python
prometheus_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsProviderWebOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader">put_web_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath">reset_json_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader">reset_web_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_web_header` <a name="put_web_header" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader"></a>

```python
def put_web_header(
  value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_json_path` <a name="reset_json_path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath"></a>

```python
def reset_json_path() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```

##### `reset_web_header` <a name="reset_web_header" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader"></a>

```python
def reset_web_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader">web_header</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput">web_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `web_header`<sup>Required</sup> <a name="web_header" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader"></a>

```python
web_header: OceancdVerificationTemplateMetricsProviderWebWebHeaderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `web_header_input`<sup>Optional</sup> <a name="web_header_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput"></a>

```python
web_header_input: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue"></a>

```python
internal_value: OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderList <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceancdVerificationTemplateMetricsProviderWebWebHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]]

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import oceancd_verification_template

oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput">web_header_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput">web_header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey">web_header_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue">web_header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `web_header_key_input`<sup>Optional</sup> <a name="web_header_key_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput"></a>

```python
web_header_key_input: str
```

- *Type:* str

---

##### `web_header_value_input`<sup>Optional</sup> <a name="web_header_value_input" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput"></a>

```python
web_header_value_input: str
```

- *Type:* str

---

##### `web_header_key`<sup>Required</sup> <a name="web_header_key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey"></a>

```python
web_header_key: str
```

- *Type:* str

---

##### `web_header_value`<sup>Required</sup> <a name="web_header_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue"></a>

```python
web_header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceancdVerificationTemplateMetricsProviderWebWebHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>]

---



