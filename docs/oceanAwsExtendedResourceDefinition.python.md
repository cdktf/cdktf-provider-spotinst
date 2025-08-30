# `oceanAwsExtendedResourceDefinition` Submodule <a name="`oceanAwsExtendedResourceDefinition` Submodule" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAwsExtendedResourceDefinition <a name="OceanAwsExtendedResourceDefinition" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition(
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
  resource_mapping: typing.Mapping[str],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.resourceMapping">resource_mapping</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}.

---

##### `resource_mapping`<sup>Required</sup> <a name="resource_mapping" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.resourceMapping"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanAwsExtendedResourceDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanAwsExtendedResourceDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanAwsExtendedResourceDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanAwsExtendedResourceDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanAwsExtendedResourceDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMappingInput">resource_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMapping">resource_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_mapping_input`<sup>Optional</sup> <a name="resource_mapping_input" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMappingInput"></a>

```python
resource_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_mapping`<sup>Required</sup> <a name="resource_mapping" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMapping"></a>

```python
resource_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsExtendedResourceDefinitionConfig <a name="OceanAwsExtendedResourceDefinitionConfig" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws_extended_resource_definition

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_mapping: typing.Mapping[str],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.resourceMapping">resource_mapping</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}.

---

##### `resource_mapping`<sup>Required</sup> <a name="resource_mapping" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.resourceMapping"></a>

```python
resource_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.226.0/docs/resources/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



